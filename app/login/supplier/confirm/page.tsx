import React from 'react'
import Image from 'next/image'
import { LogoBlackIcon } from '../../../components/icons'
import login4Img from '../../../assets/login4.svg'
import ConfirmLoginSupplier from '@/app/components/ConfirmLoginSupplier'

const page = () => {
    return (
        <div className="p-container lg:py-10 h-svh">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <div className="flex justify-center sm:justify-start">
                        <LogoBlackIcon className="size-44" />
                    </div>
                    <div className="pt-5 w-full space-y-5">
                        <div className='space-y-2'>
                            <h5 className="text-2xl font-semibold">Register As Cafe/Restaurant</h5>
                            <span className='block text-black/50'>Register Now!</span>
                        </div>
                        <ConfirmLoginSupplier />
                    </div>
                </div>
                <div className="hidden md:block md:col-span-6">
                    <Image
                        src={login4Img}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default page