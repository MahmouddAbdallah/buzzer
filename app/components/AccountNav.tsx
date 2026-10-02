'use client';
import React from 'react'
import { useAppContext } from '../context/appContext'
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const AccountNav = () => {
    const pathname = usePathname()
    return (
        <div className='flex gap-2 border-2 p-1 rounded'>
            <Link href={'/profile/account'}
                className={clsx(
                    ' py-5 w-44 flex justify-center rounded',
                    { "bg-primary text-white": pathname == '/profile/account' }
                )}>
                My Information
            </Link >
            <Link href={'/profile/account/manage'}
                className={clsx(
                    ' py-5 w-44 flex justify-center rounded',
                    { "bg-primary text-white": pathname.includes('/profile/account/manage') }
                )}>
                Manage Account
            </Link >
        </div>
    )
}

export default AccountNav