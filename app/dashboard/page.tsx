import React from 'react'
import UsersCount from './components/UsersCount'
import SupplierCount from './components/SupplierCount'
import FAQsCount from './components/FAQsCount'
import ProductCount from './components/ProductCount'
import ImageGalleryCount from './components/ImageGalleryCount'
import CategoryCount from './components/CategoryCount'
import OrdersCount from './components/OrdersCount'

const page = () => {
    return (
        <div className='grid grid-cols-12 space-y-5 sm:space-y-0 sm:gap-5'>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <UsersCount />
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <SupplierCount />
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <FAQsCount />
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <ProductCount />
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <CategoryCount />
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <ImageGalleryCount />
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <OrdersCount />
            </div>
        </div>
    )
}

export default page