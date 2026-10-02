import React, { useState } from 'react'
import useClickOutside from '../hooks/useClickOutSide'
import { CloseIcon, LoadingIcon } from './icons'
import { clsx } from 'clsx'
import toast from 'react-hot-toast'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'


const DeleteProduct = ({ setOpen, product, setProducts }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    product: any,
    setProducts: any
}) => {
    const eleRef = useClickOutside(() => {
        setOpen(false)
        document.body.style.overflowY = 'auto'
    })
    const [loading, setLoading] = useState(false)
    const handleAction = async () => {
        try {
            setLoading(true)
            const productRef = doc(db, 'product', product.id);
            await deleteDoc(productRef)
            setProducts((items: any) => {
                return items.filter((item: any) => item.id !== product.id)
            })
            document.body.style.overflowY = 'auto'
            setLoading(false)
            setOpen(false)
        } catch (error: any) {
            setLoading(false);
            console.error(error);
            toast.error(error.code);
        }
    }
    return (
        <div className='fixed h-full w-full bg-black/20 top-0 left-0 flex justify-center items-center p-container'>
            <div ref={eleRef} className='w-full md:w-[420px] lg:w-[500px] bg-white  overflow-auto rounded-md max-h-[95svh] hide-'>
                <div className='space-y-3'>
                    <div className='w-full flex justify-between py-3 border-b-2 px-2'>
                        <h6>
                            Delete Product
                        </h6>
                        <button
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon className='w-5 h-5' />
                        </button>
                    </div>
                    <div className='py-5 px-3'>
                        <p className=''>Are you sure to delete this product?</p>
                    </div>
                    <div className='flex justify-start px-3 py-2 gap-3 bg-gray-100'>
                        <button
                            disabled={loading}
                            className='px-3 py-2 rounded-md text-white disabled:bg-black/20 disabled:px-10 bg-red-500'
                            onClick={handleAction}
                        >
                            {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Delete"}
                        </button>
                        <button
                            disabled={loading}
                            className='px-3 py-2 rounded-md bg-gray-300'
                            onClick={() => { setOpen(false) }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteProduct