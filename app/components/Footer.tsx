import React from 'react'
import { EmailIcon, LogoIcon, PhoneIcon, SearchIcon } from './icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-[url("/footerImg.jpg")] bg-center bg-no-repeat bg-cover '>
            <div className='w-full h-full bg-black/85 p-container text-white py-10'>
                <div className="grid grid-cols-12">
                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 space-y-10'>
                        <LogoIcon className='w-[70px] h-[60px]' />
                        <p className='text-[#F5F5F5]'>
                            These guys have been absolutely outstanding. When I needed them they came through in a big way! I know that if you buy this theme.
                        </p>
                        <div className='space-y-8'>
                            <h5 className='uppercase text-lg'>
                                Contact Info
                            </h5>
                            <ul className='space-y-5'>
                                <li className='flex gap-3'>
                                    <PhoneIcon className='fill-[#F5F5F5]' />
                                    <span>+91 1234567891</span>
                                </li>
                                <li className='flex gap-3'>
                                    <EmailIcon className='fill-[#F5F5F5]' />
                                    <span>munasbas007@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 space-y-10 flex lg:justify-center'>
                        <div className='space-y-8'>
                            <h5 className='uppercase text-lg'>
                                Account
                            </h5>
                            <ul className='space-y-5'>
                                <li className='flex gap-3'>
                                    <Link href={'/'}>Home</Link>
                                </li>
                                <li className='flex gap-3'>
                                    <Link href={'/about'}>About</Link>
                                </li>
                                <li className='flex gap-3'>
                                    <Link href={'contact'}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 space-y-10 flex lg:justify-center'>
                        <div className='space-y-8'>
                            <h5 className='uppercase text-lg'>
                                Legals
                            </h5>
                            <ul className='space-y-5'>
                                <li className='flex gap-3'>
                                    <Link href={'/privacy-policy'}>Privacy Policy</Link>
                                </li>
                                <li className='flex gap-3'>
                                    <Link href={'/terms-condition'}>Terms & Condition</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 space-y-10 flex lg:justify-center'>
                        <div className='space-y-8'>
                            <h5 className='uppercase text-lg'>
                                Subscribe
                            </h5>
                            <div className='lg:pr-20'>
                                <div className='relative flex items-center'>
                                    <input
                                        className='w-full py-3 pl-10 rounded-md bg-transparent bg-gradient-to-br from-[#FFFFFF]/40 to-[#FFFFFF]/20 placeholder:text-white outline-none'
                                        type="text"
                                        placeholder='Search'
                                    />
                                    <button className='absolute left-3 flex lg:justify-center items-center'>
                                        <EmailIcon className='size-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer