import React from 'react'
import { EmailIcon, LocatIcon, LogoBlackIcon, PhoneIcon, WelcomeIcon, } from '../components/icons'

const page = () => {
    return (
        <div className='min-h-svh p-container py-10'>
            <div>
                <LogoBlackIcon className='size-44' />
            </div>
            <div>
                <div className='flex flex-col items-center gap-3'>
                    <p className='text-center font-semibold text-3xl'>
                        About Us
                    </p>
                    <WelcomeIcon className='w-56' />
                </div>
                <div className='py-10'>
                    <p className='text-black/60'>Saloon services encompass a wide range of beauty and grooming treatments provided by professional salons. These establishments cater to individuals seeking to enhance their appearance and pamper themselves. Clients can expect a plethora of services designed to cater to their specific needs. These services include expert haircuts and styling, offering a personalized touch to transform one&rsquo;s hairstyle. Hair coloring and highlights provide options for clients to change or enhance their hair color, creating unique looks. Salons also offer various hair treatments to improve the health and vitality of the hair, such as deep conditioning and revitalizing masks. Nail care services like manicures and pedicures ensure well-groomed hands and feet, while facial treatments aim to cleanse, rejuvenate, and nourish the skin. Hair removal services, like waxing, threading, or sugaring, assist in achieving smooth and hair-free skin. Makeup services cater to special occasions, providing professional application and customized looks. Saloon services encompass a wide range of beauty and grooming treatments provided by professional salons. These establishments cater to individuals seeking to enhance their appearance and pamper themselves. Clients can expect a plethora of services designed to cater to their specific needs. These services include expert haircuts and styling, offering a personalized touch to transform one&rsquo;s hairstyle. Hair coloring and highlights provide options for clients to change or enhance their hair color, creating unique looks. Salons also offer various hair treatments to improve the health and vitality of the hair, such as deep conditioning and revitalizing masks. Nail care services like manicures and pedicures ensure well-groomed hands and feet, while facial treatments aim to cleanse, rejuvenate, and nourish the skin. Hair removal services, like waxing, threading, or sugaring, assist in achieving smooth and hair-free skin. Makeup services cater to special occasions, providing professional application and customized looks.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3'>
                        <PhoneIcon className='fill-red-500 size-6' />
                        <span>+966 0000 000</span>
                    </div>
                    <div className='flex gap-3'>
                        <LocatIcon className='fill-red-500 size-6' />
                        <span>Main Market, AI-Ain,KSA</span>
                    </div>
                    <div className='flex gap-3'>
                        <EmailIcon className='fill-red-500 size-6' />
                        <span>Contact@help.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page