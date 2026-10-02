'use client'
import { DeleteIcon, EditIcon, EyeIcon } from '@/app/components/icons'
import { db } from '@/firebase'
import { collection, onSnapshot, query } from 'firebase/firestore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SearchByName from './SearchByName'
import { useSearchParams } from 'next/navigation'

const UsersTable = () => {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        try {
            const q = query(collection(db, 'User'))
            await onSnapshot(q, (userSnapshot) => {
                const userarr: any = [];
                userSnapshot.docs.map((user) => {
                    userarr.push(user.data());
                });
                setUsers(userarr);
            });
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    const search = useSearchParams();
    const keyword = search.get('keyword')

    useEffect(() => {
        // setUsers((user)=>{
        //     user.filter()
        // })
    }, [search])

    return (
        <div className='space-y-4'>
            <div>
                <SearchByName />
            </div>
            <div className='bg-white rounded-md overflow-auto pb-5'>
                <table className="w-full text-sm whitespace-nowrap">
                    <thead className=''>
                        <tr className=''>
                            <td scope="col" className="uppercase py-5 px-3 border-b-2 text-sm font-medium">Profile</td>
                            <td scope="col" className="uppercase py-5 px-3 border-b-2 text-sm font-medium">Name</td>
                            <td scope="col" className="uppercase py-5 px-3 border-b-2 text-sm font-medium">Phone</td>
                            <td scope="col" className="uppercase py-5 px-3 border-b-2 text-sm font-medium">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.length ?
                                users?.map((item: any, i: number) => {
                                    return (
                                        item.uid &&
                                        <tr key={item.uid} className=''>
                                            <td className='py-3 px-3 border-b-2'>
                                                <div className='size-16 flex justify-center rounded-full overflow-hidden bg-black/20 border'>
                                                    <Image
                                                        src={item.photo_url}
                                                        alt=''
                                                        width={200}
                                                        height={200}
                                                        className=' size-16 object-contain'
                                                    />
                                                </div>
                                            </td>
                                            <td className='py-3 px-3 border-b-2'>
                                                {item.display_name}
                                            </td>
                                            <td className='py-3 px-3 border-b-2'>
                                                {item.phone_number}
                                            </td>
                                            <td className='py-3 px-3 border-b-2'>
                                                <button
                                                    onClick={() => {
                                                    }}
                                                >
                                                    <DeleteIcon className='size-6 hover:stroke-red-500 duration-150' />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                    }}
                                                >
                                                    <EyeIcon className='size-6 hover:stroke-red-500 duration-150 ' />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : <tr className='text-center'>
                                    <td colSpan={4} className='py-3 px-3 border-b-2'>
                                        No Data
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersTable