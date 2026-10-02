'use client'
import { MenuIcon } from '@/app/components/icons'
import { useAppContext } from '@/app/context/appContext'
import React from 'react'

const NavbarDashboard = () => {
    const context = useAppContext();
    const handleOpenSidebar = () => {
        context.setOpenSidebar((prev) => !prev)
    }
    return (
        <nav>
            <div className='py-5'>
                <div className='flex justify-between lg:justify-end'>
                    <button onClick={handleOpenSidebar} className='lg:hidden'>
                        <MenuIcon className='fill-black' />
                    </button>
                    <div className='flex items-center'>
                        <div className='size-12 bg-pink-500 rounded-full' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarDashboard