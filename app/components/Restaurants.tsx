'use client';
import React, { useEffect, useState } from 'react'
import { LocationIcon, WelcomeIcon } from './icons'
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import Link from 'next/link';
import Image from 'next/image';
import ActiveStars from './ActiveStars';
import RestaurantLoading from './RestaurantLoading';




const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchRestaurants = async () => {
        try {
            setLoading(true)
            const q = query(
                collection(db, 'user'),
                where('role', "==", "supplier"),
                limit(4)
            );
            const querySnapshot = await getDocs(q);
            const userDataArray = querySnapshot.docs.map(doc => doc.data());
            setRestaurants(userDataArray as any);
            setLoading(false)

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchRestaurants();
    }, [])
    return (
        <div>
            <div>
                <div className='flex flex-col items-center gap-3'>
                    <p className='text-center font-semibold text-3xl'>
                        Our Restaurants
                    </p>
                    <WelcomeIcon className='w-56' />
                </div>
                {
                    !loading ?
                        <div className='p-container py-10 grid grid-cols-12 space-y-5 lg:space-y-0 sm:space-x-5 lg:space-x-0 lg:gap-10'>
                            {restaurants?.map((item: any) => {
                                return (
                                    <Link
                                        className='block col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border rounded-2xl overflow-hidden'
                                        href={`/restaurant/${item?.uid}`}
                                        key={item.uid}
                                    >
                                        <div className='w-full h-full space-y-4'>
                                            <div className=' w-full h-52 rounded-b-full overflow-hidden '>
                                                <Image
                                                    src={item?.picture}
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
                                                        <ActiveStars number={3} />
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
                            })}
                        </div>
                        :
                        <RestaurantLoading number={4} />
                }
            </div>
        </div>
    )
}


export default Restaurants