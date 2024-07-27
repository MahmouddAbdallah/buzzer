'use client'
import React from 'react'
import { useProfileData } from '../../profileContext/profileAppContext'
import Link from 'next/link';
import { ArrowRightIcon } from '@/app/components/icons';

const ManageAccount = () => {
    const profileData = useProfileData();
    return (
        <div className='flex justify-center'>
            <div className='w-[calc(186px*2)] py-5'>
                {
                    profileData?.userData?.role == 'supplier' ?
                        <div className='space-y-4'>
                            <Link href={'/profile/account/manage-edit-profile'} className='flex justify-between items-center p-3 border w-full'>
                                <span className='block'>
                                    Edit profile
                                </span>
                                <ArrowRightIcon className='fill-black' />
                            </Link>
                            <Link href={'/profile/supplier-mangment/products'} className='flex justify-between items-center p-3 border w-full'>
                                <span className='block'>
                                    Products
                                </span>
                                <ArrowRightIcon className='fill-black' />
                            </Link>
                            <Link href={'/profile/supplier-mangment/add-product'} className='flex justify-between items-center p-3 border w-full'>
                                <span className='block'>
                                    Add Product
                                </span>
                                <ArrowRightIcon className='fill-black' />
                            </Link>
                            {/* <Link href={'/profile/supplier-mangment/orders'} className='flex justify-between items-center p-3 border w-full'>
                                <span className='block'>
                                    Orders
                                </span>
                                <ArrowRightIcon className='fill-black' />
                            </Link> */}
                        </div>
                        :
                        <div className='space-y-4'>
                            <Link href={'/profile/account/manage-edit-profile'} className='flex justify-between items-center p-3 border w-full'>
                                <span className='block'>
                                    Edit profile
                                </span>
                                <ArrowRightIcon className='fill-black' />
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default ManageAccount