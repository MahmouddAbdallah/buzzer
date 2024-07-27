'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRightIcon, LogoBlackIcon, LogoIcon, MenuIcon, PersonIcon } from './icons'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Notification from './Notification';
import useClickOutside from '../hooks/useClickOutSide';
import Logout from './Logout';
import { useAppContext } from '../context/appContext';
const Navbar = ({ mode }: { mode: any }) => {
    const pathname = usePathname()
    const links = [
        {
            name: 'Home',
            href: "/"
        },
        {
            name: "Products",
            href: "/products"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Contact Us",
            href: "/contact"
        },
    ]
    const menuLinks = [
        {
            name: "Offers",
            link: '/offers'
        },
        {
            name: "Featured Products",
            link: '/featured-products'
        },
        {
            name: "Suppliers",
            link: '/suppliers'
        },
        {
            name: "Articles",
            link: '/articles'
        },
        {
            name: "Image Gallery",
            link: '/image-gallery'
        },
        {
            name: "FAQs",
            link: '/faqs'
        },
        {
            name: "Settings",
            link: '/settings'
        },
        {
            name: "About Us",
            link: '/about'
        },
        {
            name: "Mission & Vision",
            link: '/mission-vision'
        },
        {
            name: "Contact Us",
            link: '/contact'
        },
        {
            name: "Privacy Policy",
            link: '/privacy-policy'
        },
        {
            name: "Terms & Conditions",
            link: '/terms-conditions'
        },
    ]
    const [open, setOpen] = useState(false)
    const close = () => {
        setOpen(false)
        document.body.style.overflowY = 'auto'
    }
    const eleRef = useClickOutside(() => { setOpen(false) }, open)
    const context = useAppContext()
    return (
        <nav className='p-container py-5 '>
            <div className='flex justify-between items-center'>
                <Link className='block' href={'/'}>
                    {
                        mode == 'light' ?
                            <LogoIcon className='w-[70px] h-[60px]' />
                            :
                            <LogoBlackIcon className='w-[70px] h-[60px]' />
                    }
                </Link>
                <ul className='hidden lg:flex gap-4'>
                    {
                        links.map((item => {
                            return (
                                <li key={item.name} >
                                    <Link href={item.href} className={clsx(
                                        `${pathname != item.href ? mode == "dark" ? 'text-black' : "text-white" : ""}`,
                                        { 'flex text-primary relative after:content-[""] after:absolute after:w-full after:h-[1px] after:bg-primary after:bottom-0': pathname == item.href },
                                    )}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }))
                    }
                </ul>
                <div className='flex gap-8'>
                    {
                        context.user &&
                        <>
                            <Link href={'/profile/account'}>
                                <PersonIcon className={clsx('size-5',
                                    { 'fill-black': mode == "dark" },
                                    { 'fill-white': mode != "dark" }
                                )} />
                            </Link>
                            <Notification mode={mode} />
                        </>}
                    <div ref={eleRef}>
                        <button onClick={() => {
                            setOpen(!open)
                            document.body.style.overflowY = open ? 'auto' : 'hidden'
                        }}>
                            <MenuIcon className={clsx('size-5',
                                { 'fill-black': mode == "dark" },
                                { 'fill-white': mode != "dark" }
                            )} />
                        </button>
                        <div className={`fixed left-0 top-0 z-50 w-72 lg:w-80 h-svh overflow-auto hide-scrollbar bg-gradient-to-b from-[#750605] to-[#320202] ${open ? 'rtl' : 'ltr'}`}>
                            <div className='px-5'>
                                <div className='flex justify-center pt-10 border-b-2 border-white/25'>
                                    <Link onClick={close} href={'/'}>
                                        <LogoIcon className='size-44' />
                                    </Link>
                                </div>
                                <div className='py-5 space-y-5'>
                                    <div>
                                        {menuLinks.map(links => {
                                            return (
                                                <Link onClick={close} className='flex justify-between items-center py-2 text-white' href={links.link} key={links.name} >
                                                    <span className='block'>
                                                        {links.name}
                                                    </span>
                                                    <span className="block">
                                                        <ArrowRightIcon className='fill-white' />
                                                    </span>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                    <div className='space-y-5'>
                                        {
                                            context.user ?
                                                <Logout />
                                                :
                                                <>
                                                    <Link onClick={close} href={'/login'} className='block text-center w-full py-2 rounded-xl border-2 font-medium text-white'>
                                                        Register As User
                                                    </Link>
                                                    <Link onClick={close} href={'/login/supplier'} className='block text-center w-full py-2 rounded-xl border-2 font-medium text-white'>
                                                        Register As Supplier
                                                    </Link>
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar