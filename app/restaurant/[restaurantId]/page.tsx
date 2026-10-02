import ProductsRestaurants from '@/app/components/ProductsRestaurants'
import React from 'react'

const page = ({ params }: { params: { restaurantId: string } }) => {
    const { restaurantId } = params;
    return (
        <div>
            <ProductsRestaurants restaurantId={restaurantId} />
        </div>
    )
}

export default page