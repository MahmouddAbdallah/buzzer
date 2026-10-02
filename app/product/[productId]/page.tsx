import Navbar from '@/app/components/Navbar'
import ProductDetails from '@/app/components/ProductDetails'
import React from 'react'

const page = ({ params }: { params: { productId: string } }) => {
    const { productId } = params;
    return (
        <div className='min-h-svh'>
            <Navbar mode={'dark'} />
            <div>
                <ProductDetails productId={productId} />
            </div>
        </div>
    )
}

export default page