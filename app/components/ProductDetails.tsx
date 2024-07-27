'use client'
import { db } from '@/firebase'
import { collection, doc, getDoc, getDocs, limit, query, where } from 'firebase/firestore'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import ActiveStars from './ActiveStars'
import { LocationIcon } from './icons'

const ProductDetails = ({ productId }: { productId: string }) => {
    const [product, setProduct] = useState<any>({})
    const [supplier, setSupplier] = useState<any>({})
    const [loading, setLoading] = useState(false)

    const fetchProducts = useCallback(
        async () => {
            setLoading(true);
            try {
                const docRef = doc(db, 'product', productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProduct(docSnap.data());
                } else {
                    console.log('Document not found');
                }
            } catch (error) {
                console.error('Error fetching products: ', error);
            } finally {
                setLoading(false);
            }
        }, [productId]
    );
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const fetchSupplier = useCallback(async () => {
        try {
            if (product.userId) {
                const supplierRef = doc(db, 'user', product.userId);
                const supplierSnap = await getDoc(supplierRef);
                if (supplierSnap.exists()) {
                    setSupplier(supplierSnap.data());
                } else {
                    console.log('Supplier not found');
                }
            }
        } catch (error) {
            console.error('Error fetching supplier: ', error);
        }
    }, [product.userId])

    useEffect(() => {
        fetchSupplier()
    }, [fetchSupplier])


    return (
        <div className='p-container py-20'>
            {!loading ?
                <div>
                    <div>
                        <div className='grid grid-cols-12 space-y-10 lg:space-y-0 lg:gap-10' >
                            <div className='col-span-12 lg:col-span-6'>
                                {
                                    product.img &&
                                    <Image
                                        src={product?.img}
                                        alt={product?.name}
                                        height={700}
                                        width={700}
                                        className='w-full  max-h-[500px] object-cover'
                                    />
                                }
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='space-y-10'>
                                    <div className='space-y-5'>
                                        <h1 className='sm:text-lg md:text-xl lg:text-3xl font-semibold'>{product?.name}</h1>
                                        <div className='flex gap-2'>
                                            <ActiveStars number={product.rate} />
                                        </div>
                                        <p className='sm:text-lg lg:text-2xl font-semibold text-red-500'>{product?.price}$</p>
                                        <p><span className='text-black/70 font-medium'>Description:</span> {product.description}</p>
                                    </div>
                                    <button className='w-full  py-2 rounded-md border-2 border-primary hover:bg-primary duration-200'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-20'>
                        <div className='space-y-5'>
                            <p className='font-semibold text-red-500'>Supplier</p>
                            <div className='flex gap-5 flex-wrap'>
                                <div className='w-60 rounded-l-[1000px] rounded-r-full overflow-hidden'>
                                    {supplier?.picture && <Image
                                        src={supplier?.picture}
                                        alt={supplier.name}
                                        width={500}
                                        height={500}
                                        className='w-full h-full object-cover'
                                    />}
                                </div>
                                <div className=' space-y-4'>
                                    <div className='space-y-2'>
                                        <div className='flex gap-2'><ActiveStars number={4} /></div>
                                        <p className='font-semibold text-lg md:text-xl'>{supplier.name}</p>
                                        <p className='text-red-500/50 font-medium'> <span className='uppercase'>
                                            {supplier?.type?.split('')[0]}
                                        </span>
                                            <span>
                                                {supplier?.type?.slice(1)}
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className='flex justify-center text-black/50 font-medium'>
                                            <div className="flex gap-3 items-center">
                                                <LocationIcon className='' />
                                                <span className="block">
                                                    {supplier.address}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""
            }
        </div>
    )
}

export default ProductDetails