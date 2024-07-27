'use client'
import { auth } from '@/firebase'
import { createContext, useContext, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
const appContext = createContext<{
    user: any
}>({ user: null })
const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>();
    const getUser = () => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
        })
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <appContext.Provider value={{ user }}>
            <Toaster toastOptions={{ duration: 4000, position: "bottom-right" }} />
            {children}
        </appContext.Provider>
    )
}

export const useAppContext = () => {
    return (useContext(appContext))
}
export default AppContextProvider