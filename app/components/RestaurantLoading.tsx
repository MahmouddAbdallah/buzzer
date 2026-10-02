import React from 'react'
import ActiveStars from './ActiveStars'

const RestaurantLoading = ({ number }: { number?: number }) => {
    return (
        <div className='p-container py-10 grid grid-cols-12 space-y-5 lg:space-y-0 sm:space-x-5 lg:space-x-0 lg:gap-10'>
            {Array(number || 8).fill("").map((_, i) => {
                return <div key={i} className='block bg-stone-100 animate-pulse col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border rounded-2xl overflow-hidden pb-10'>
                    <div className='w-full h-full space-y-4'>
                        <div className=' w-full h-52 rounded-b-full overflow-hidden '>
                            <div
                                className='bg-stone-200 animate-pulse h-full w-full object-cover'
                            />
                        </div>
                        <div className='text-center py-5 space-y-3'>
                            <div className='flex justify-center'>
                                <div className='flex gap-1'>
                                    <ActiveStars number={0} />
                                </div>
                            </div>
                            <div className='flex gap-2 flex-col items-center'>
                                <div className='h-3 w-44 bg-stone-200 animate-pulse rounded-md' />
                                <div className='h-3 w-36 bg-stone-200 animate-pulse rounded-md' />
                                <div className="h-3 w-36 bg-stone-200 animate-pulse rounded-md" />
                                <div className="h-3 w-10 bg-stone-200 animate-pulse rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default RestaurantLoading