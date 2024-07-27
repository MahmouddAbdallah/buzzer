import React from 'react'
import welcomeImg from '../assets/welcome.png'
import Image from 'next/image'
import { WelcomeIcon } from './icons'
const WelcomeTo = () => {
    return (
        <section className='p-container py-5'>
            <div className='grid grid-cols-12 lg:gap-10 space-y-10 lg:space-y-0'>
                <div className='col-span-12 lg:col-span-6'>
                    <Image
                        src={welcomeImg}
                        alt=''
                        height={1000}
                        width={1000}
                        className='w-full h-full'
                    />
                </div>
                <div className='col-span-12 lg:col-span-6 flex items-center'>
                    <div className='flex flex-col items-center gap-10'>
                        <div className='flex flex-col items-center gap-3'>
                            <p className='text-center font-semibold text-3xl'>
                                Welcome TO Our
                                <br />
                                Luxury Restaurant
                            </p>
                            <WelcomeIcon className='w-60' />
                        </div>
                        <div className='px-8'>
                            <p className='text-center text-[#757575]'>
                                Welcome to our exquisite salon, where beauty meets expertise.
                                Step into a world of luxury and indulgence, where we are
                                dedicated to enhancing your natural beauty and leaving
                                you feeling radiant.
                            </p>
                        </div>
                        <button className='px-8 py-2 rounded-md border-2 border-primary hover:bg-primary duration-200'>
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeTo