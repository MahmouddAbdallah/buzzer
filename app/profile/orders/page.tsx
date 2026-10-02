'use client'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useProfileData } from '../profileContext/profileAppContext';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';

const Orders = () => {
    const profileContext = useProfileData();
    const [orders, setOrders] = useState<any>([])
    const fetchOrders = useCallback(
        async () => {
            try {
                const orderRef = collection(db, 'order');

                const q = query(orderRef, where('user', '==', profileContext.userData.uid))
                const ordersSnap = await getDocs(q)
                setOrders(ordersSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            } catch (error: any) {
                console.error(error);
                toast.error(error.code)
            }
        }, [profileContext?.userData?.uid]
    )
    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])
    console.log(orders);

    return (
        <div>Orders</div>
    )
}

export default Orders