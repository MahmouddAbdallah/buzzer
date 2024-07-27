import React from 'react'
import { SpecialMenuIcon, TastyFoodIcon, WelcomeIcon, WIFIIcon } from './icons'
import bargerImg from '../assets/barger.png'
import Image from 'next/image'
const Services = () => {
    const services = [
        {
            name: 'Special Menu',
            icon: <SpecialMenuIcon />
        },
        {
            name: 'Tasty Food',
            icon: <TastyFoodIcon />
        },
        {
            name: 'Free Wi-Fi',
            icon: <WIFIIcon />
        },
        {
            name: 'Special Offer',
            icon: <SpecialMenuIcon />
        },
    ]
    return (
        <section className='overflow-hidden'>
            <div className='py-10 relative flex'>
                <div className='w-full z-10'>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='text-center font-semibold text-3xl'>
                            Our Services
                        </p>
                        <WelcomeIcon className='w-56' />
                    </div>
                    <div className='p-container py-10'>
                        <div className='grid grid-cols-12 sm:gap-5 lg:gap-7 space-y-5 sm:space-y-0'>
                            {
                                services.map(item => {
                                    return (
                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ' key={item.name}>
                                            <div className='w-full flex justify-center py-10 bg-white border border-black/20 rounded-xl'>
                                                <div className='flex flex-col items-center gap-3'>
                                                    <div>
                                                        {item.icon}
                                                    </div>
                                                    <p className='font-medium text-lg'>{item.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='absolute -right-[340px]'>
                    <Image
                        src={bargerImg}
                        alt='barger'
                        width={500}
                        height={500}
                    />
                </div>
                <div className='absolute -left-[270px]'>
                    <Image
                        src={bargerImg}
                        alt='barger'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}

export default Services