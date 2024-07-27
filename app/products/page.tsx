'use client'
import { db } from '@/firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react'
import RestaurantLoading from '../components/RestaurantLoading';
import Image from 'next/image';
import ActiveStars from '../components/ActiveStars';
import Link from 'next/link';
import { LocationIcon } from '../components/icons';

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const productsRef = collection(db, "product");
            const q = query(productsRef,);
            const querySnapshot = await getDocs(q);

            const products = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setProducts(products as []);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching products: ', error);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='min-h-svh'>
            {
                !loading ?
                    <div>
                        <div>
                            {products.length ?
                                <div className='p-container py-10 grid grid-cols-12 space-y-5 lg:space-y-0 sm:space-x-5 lg:space-x-0 lg:gap-10'>
                                    {
                                        products.map((item: any) => {
                                            return (
                                                <Link
                                                    className='block col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border rounded-2xl overflow-hidden'
                                                    href={`/product/${item?.id}`}
                                                    key={item.uid}
                                                >
                                                    <div className='w-full h-full space-y-4'>
                                                        <div className=' w-full h-52 rounded-b-full overflow-hidden '>
                                                            <Image
                                                                src={item?.img}
                                                                alt={item?.name || ""}
                                                                width={700}
                                                                height={700}
                                                                priority
                                                                className='h-full w-full object-cover'
                                                            />
                                                        </div>
                                                        <div className='text-center py-5 space-y-3'>
                                                            <div className='flex justify-center'>
                                                                <div className='flex gap-1'>
                                                                    <ActiveStars number={item.rate} />
                                                                </div>
                                                            </div>
                                                            <h6 className='text-lg font-semibold'>{item.name}</h6>
                                                            <span className='block text-red-500 font-medium'>
                                                                <span className='uppercase'>
                                                                    {item?.type?.split('')[0]}
                                                                </span>
                                                                <span>
                                                                    {item?.type?.slice(1)}
                                                                </span>
                                                            </span>
                                                            <div>
                                                                <span className=" font-medium">
                                                                    {item.type}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="text-red-500 font-medium">
                                                                    SAR {item.price}
                                                                </span>
                                                            </div>
                                                            <div className='flex justify-center text-black/50 font-medium'>
                                                                <div className="flex gap-3 items-center">
                                                                    <LocationIcon className='' />
                                                                    <span className="block">
                                                                        {item.address}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <div className='w-full  h-svh flex justify-center items-center'>
                                    <span className='font-medium'>There is no proudct</span>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <RestaurantLoading />
            }
        </div>
    )
}

export default Products