import { auth } from '@/firebase'
import React from 'react'

const Logout = () => {
    const logout = async () => {
        try {
            await auth.signOut()
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <button onClick={logout} className='w-full py-2 rounded-xl border-2 font-medium text-white'>
            Logout
        </button>
    )
}

export default Logout