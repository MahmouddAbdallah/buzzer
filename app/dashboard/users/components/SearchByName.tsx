import { SearchIcon } from '@/app/components/icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchByName = () => {
    const pathname = usePathname()
    const search = useSearchParams();
    const [keyword, setKeywork] = useState(search.get('keyword') || "");
    const router = useRouter();
    useEffect(() => {
        router.push(`${pathname}?keyword=${keyword}`)
    }, [keyword, pathname, router])
    return (
        <div className='w-full flex justify-end'>
            <div className='relative flex items-center'>
                <input
                    value={keyword}
                    onChange={(e) => setKeywork(e.target.value)}
                    type="text"
                    className='w-full lg:w-96 bg-transparent border border-black/50 p-2 rounded-full outline-primary pl-10 peer'
                    placeholder='Search By Name...'
                />
                <div className='absolute pl-3 '>
                    <SearchIcon className='fill-black peer-focus:fill-primary' />
                </div>
            </div>
        </div>
    )
}

export default SearchByName