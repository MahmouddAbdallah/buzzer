'use client';
import { ArrowRightLongIcon, FAQsIcon, LoadingIcon, OrdersIcon, ProductIcon, UsersIcon } from '@/app/components/icons';
import { db } from '@/firebase';
import { collection, getCountFromServer, query } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const OrdersCount = () => {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const fetchUserCount = async () => {
        try {
            setLoading(true)
            const q = query(collection(db, 'order'))
            const userSnap = await getCountFromServer(q);
            setCount(userSnap.data().count)
            setLoading(false)
        } catch (error: any) {
            console.error(error);
            setLoading(false)
            toast.error(error.code)
        }
    }
    useEffect(() => {
        fetchUserCount()
    }, [])
    return (
        <div className='w-full border rounded-md space-y-3 bg-white'>
            <div className='space-y-2 px-5 pt-5'>
                <div className='space-y-1s'>
                    <OrdersIcon className='size-8 fill-black stroke-' />
                    <h6 className='text-2xl font-medium'>Total Orders</h6>
                </div>
                <p className='text-primary fill-primary text-2xl font-medium'>
                    {(loading && count == 0) ?
                        <LoadingIcon className='animate-spin' />
                        : count}
                </p>
            </div>
            <div className='w-full border-t px-5 py-3'>
                <Link className='text-primary fill-primary flex gap-3' href={'/dashboard/faqs'}>
                    <p className='font-medium'>View All</p>
                    <ArrowRightLongIcon className='size-6 fill-primary' />
                </Link>
            </div>
        </div>
    )
}

export default OrdersCount