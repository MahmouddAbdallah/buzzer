import Navbar from '@/app/components/Navbar'
import ProductDetails from '@/app/components/ProductDetails'
import React from 'react'

const page = ({ params }: { params: { productId: string } }) => {
    const { productId } = params;
    return (
        <div className='min-h-svh'>
            <Navbar mode={'dark'} />
            {/* <header className='bg-[url("/productImg.jpg")] bg-cover bg-center bg-no-repeat h-[65svh]'>
                <div className='bg-black/85 h-full'>
                    <Navbar mode={'light'} />
                    <div className='h-1/2 flex items-center justify-center text-white'>
                        <div className='text-center'>
                            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium'>Products Details</h3>
                            <span>Home / Product Details</span>
                        </div>
                    </div>
                </div>
            </header> */}
            <div>
                <ProductDetails productId={productId} />
            </div>
        </div>
    )
}

export default page