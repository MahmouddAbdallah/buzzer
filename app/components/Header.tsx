import React from 'react'
import Navbar from './Navbar'
import { FoodModeIcon } from './icons'
import Search from './Search'

const Header = () => {
    return (
        <header className='bg-[url("/small-hero.jpg")] md:bg-[url("/hero.jpg")] bg-cover bg-center bg-no-repeat pb-36'>
            <Navbar mode={'light'} />
            <div className='h-full grid grid-cols-12 p-container'>
                <div className='col-span-12 lg:col-span-6'>
                    <FoodModeIcon className='w-80 sm:w-96 md:w-[420px] lg:w-[500px]' />
                    <div className=' space-y-5'>
                        <p className='text-white'>
                            Welcome to our exquisite salon, where beauty meets expertise.
                            Step into a world of luxury and indulgence, where we are
                            dedicated to enhancing your natural beauty and leaving
                            you feeling radiant.
                        </p>
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header