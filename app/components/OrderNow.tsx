import React, { useTransition } from 'react'
import { LoadingIcon } from './icons';
import toast from 'react-hot-toast';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useAppContext } from '../context/appContext';


const OrderNow = ({ supplierId, productId }: { supplierId: string, productId: string }) => {
    const [isPending, startTransition] = useTransition();
    const context = useAppContext()
    const orderNow = async () => {
        try {
            const orderRef = doc(collection(db, 'order'));
            if (!supplierId || !productId) {
                toast.error('Try Later!!')
            }
            await setDoc(orderRef, {
                user: context.user.uid,
                supplier: supplierId,
                product: productId
            })
            toast.success('You order this food!')
        } catch (error: any) {
            console.error(error);
            toast.error(error.code)
        }
    }
    return (
        <button
            onClick={() => {
                startTransition(() => {
                    orderNow()
                })
            }}
            className='w-full  py-2 rounded-md border-2 border-primary hover:bg-primary duration-200 flex justify-center'>
            {isPending ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Order now"}
        </button>
    )
}

export default OrderNow