'use client'
import { AboutIcon, CategoryIcon, ContactRequestIcon, CouponIcon, DeliveryIcon, FAQsIcon, GiftIcon, HomeIcon, ImageIcon, LogoBlackIcon, ProductIcon, RiderIcon, SupplierIcon, TranslationIcon, UsersIcon } from '@/app/components/icons'
import { useAppContext } from '@/app/context/appContext'
import useClickOutside from '@/app/hooks/useClickOutSide'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
    const items = [
        {
            name: 'Dashboard',
            icon: <HomeIcon className='size-7' />,
            href: '/dashboard',
        },
        {
            name: 'Manage User',
            icon: <UsersIcon className='size-7' />,
            href: "/dashboard/users"
        },
        {
            name: 'Manage Supplier',
            icon: <SupplierIcon className='size-7' />,
            href: "/supplier"
        },
        {
            name: 'Delivery company',
            icon: <DeliveryIcon className='size-7' />,
            href: "/deliverycompany"
        },
        {
            name: "Manage Rider",
            icon: <RiderIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "Subscription Package",
            icon: <GiftIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "Category",
            icon: <CategoryIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "Products",
            icon: <ProductIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "Image Gallary",
            icon: <ImageIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "FAQs",
            icon: <FAQsIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "Coupon",
            icon: <CouponIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "Contact Request",
            icon: <ContactRequestIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "About App",
            icon: <AboutIcon className='size-7' />,
            href: '/rider'
        },
        {
            name: "Translation",
            icon: <TranslationIcon className='size-7' />,
            href: '/rider'
        },
    ]
    const context = useAppContext();
    const refSidebar = useClickOutside(() => context.setOpenSidebar(false), context.openSidebar)
    return (
        <div ref={refSidebar} className={`w-full h-full bg-gray-50 block ${context.openSidebar ? 'rtl-sidebar' : 'ltr-sidebar'}`}>
            <div className='flex justify-center py-10'>
                <Link href={'/'}>
                    <LogoBlackIcon className='size-32' />
                </Link>
            </div>
            <div className='space-y-2 h-[70svh] overflow-auto hide-scrollbar'>
                {
                    items.map((item) => {
                        return (
                            <div
                                className='pr-4'
                                key={item.name}
                            >
                                <Link
                                    href={item.href}
                                    className={clsx(
                                        'block py-2 pl-5 w-full',
                                        { 'bg-primary rounded-r-full fill-white text-white': pathname == item.href }
                                    )}
                                >
                                    <div className='flex items-center gap-3'>
                                        <div>
                                            {item.icon}
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar