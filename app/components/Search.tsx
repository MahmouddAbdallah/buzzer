import React from 'react'
import { SearchIcon } from './icons'

const Search = () => {
    return (
        <div className='lg:pr-20'>
            <div className='relative flex items-center'>
                <input
                    className='w-full py-3 px-3 rounded-full bg-transparent bg-gradient-to-br from-[#FFFFFF]/40 to-[#FFFFFF]/20 placeholder:text-white outline-none'
                    type="text"
                    placeholder='Search'
                />
                <button className='absolute right-3 size-9 rounded-full flex justify-center items-center bg-primary'>
                    <SearchIcon className='size-5' />
                </button>
            </div>
        </div>
    )
}

export default Search