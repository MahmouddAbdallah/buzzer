'use client'
import { useAppContext } from '@/app/context/appContext';
import { db } from '@/firebase';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const profileContext = createContext<{
    userData: any;
    setUserData: React.Dispatch<React.SetStateAction<any>>
}>({ userData: null, setUserData: () => { } })
const ProfileAppProiver = ({ children }: { children: React.ReactNode }) => {

    const [userData, setUserData] = useState(null)
    const context = useAppContext()
    const fetchUserData = useCallback(
        async () => {
            if (context?.user?.uid) {
                try {
                    const q = query(
                        collection(db, 'user'),
                        where('uid', "==", context.user.uid),
                        limit(1)
                    );
                    const querySnapshot = await getDocs(q);
                    const userDataArray = querySnapshot.docs.map(doc => doc.data());
                    setUserData(userDataArray[0] as any);
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                }
            }
        }, [context]);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    return (
        <profileContext.Provider
            value={{ userData, setUserData }}
        >
            {children}
        </profileContext.Provider>
    )
}

export const useProfileData = () => {
    return (
        useContext(profileContext)
    )
}
export default ProfileAppProiver