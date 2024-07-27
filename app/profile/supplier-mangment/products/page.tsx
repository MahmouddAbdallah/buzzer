'use client';
import { db } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react'
import { useProfileData } from '../../profileContext/profileAppContext';
import Image from 'next/image';
import { DeleteIcon, EditIcon } from '@/app/components/icons';
import UpdateProduct from '@/app/components/UpdateProduct';
import DeleteProduct from '@/app/components/DeleteProduct';

const Product = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [updateModal, setUpdateModal] = useState(false)
    const profileData = useProfileData()
    const [deleteModal, setDeleteModal] = useState(false)

    const fetchProducts = useCallback(
        async () => {
            try {
                const productsRef = collection(db, "product",);
                const q = query(productsRef, where('userId', '==', profileData?.userData?.uid));
                const querySnapshot = await getDocs(q);

                const products = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProducts(products as []);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        }, [profileData?.userData?.uid]
    );
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <div>
            <div className='p-container min-h-svh'>
                <div className='overflow-auto'>
                    <table className="w-full text-sm whitespace-nowrap">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col" className="border-2 py-3 px-3">Num</th>
                                <th scope="col" className="border-2 py-3 px-3">Image</th>
                                <th scope="col" className="border-2 py-3 px-3">Name</th>
                                <th scope="col" className="border-2 py-3 px-3">Price</th>
                                <th scope="col" className="border-2 py-3 px-3">Rate</th>
                                <th scope="col" className="border-2 py-3 px-3">Delete</th>
                                <th scope="col" className="border-2 py-3 px-3">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.length ?
                                    products?.map((item: any, i: number) => {
                                        return (
                                            <tr key={item.id} className='text-center'>
                                                <td className='border-b-2 border-x-2 py-2 px-3'>{i + 1}</td>
                                                <td className='border-b-2 border-x-2 py-2 px-3'>
                                                    <div className='h-20 flex justify-center'>
                                                        <Image
                                                            src={item.img}
                                                            alt=''
                                                            width={200}
                                                            height={200}
                                                            className='h-full object-contain w-fit'
                                                        />
                                                    </div>
                                                </td>
                                                <td className='border-b-2 border-x-2 py-2 px-3'>
                                                    {item.name}
                                                </td>
                                                <td className='border-b-2 border-x-2 py-2 px-3'>
                                                    {item.price}
                                                </td>
                                                <td className='border-b-2 border-x-2 py-2 px-3'>
                                                    {item.rate}
                                                </td>
                                                <td className='border-b-2 border-x-2 py-2 px-3'>
                                                    <button
                                                        onClick={() => {
                                                            setProduct(item)
                                                            document.body.style.overflowY = 'hidden'
                                                            setDeleteModal(true)
                                                        }}
                                                    >
                                                        <DeleteIcon className='size-6 hover:stroke-red-500 duration-150' />
                                                    </button>
                                                </td>
                                                <td className='border-b-2 border-x-2 py-2 px-3'>
                                                    <button onClick={() => {
                                                        setProduct(item)
                                                        document.body.style.overflowY = 'hidden'
                                                        setUpdateModal(true)
                                                    }}>
                                                        <EditIcon className='size-6 hover:stroke-blue-500 duration-150' />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    : <tr className='text-center'>
                                        <td colSpan={9} className='border-b-2 border-x-2 py-2 px-3'>
                                            No Products
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {updateModal && <UpdateProduct setOpen={setUpdateModal} product={product} setProducts={setProducts} />}
            {deleteModal && <DeleteProduct setOpen={setDeleteModal} product={product} setProducts={setProducts} />}
        </div>
    )
}

export default Product