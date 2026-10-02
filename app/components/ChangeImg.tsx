'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useProfileData } from '../profile/profileContext/profileAppContext'
import { db, storage } from '@/firebase'
import { ref, uploadBytes, getDownloadURL, } from 'firebase/storage'
import toast from 'react-hot-toast'
import { doc, updateDoc } from 'firebase/firestore'
const ChangeImg = () => {
    const profileData = useProfileData();
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const btnRef = useRef<any>()
    const inputRef = useRef<any>()
    useEffect(() => {
        const input = inputRef.current;
        const btn = btnRef.current;
        const handleClickInput = () => {
            input.click()
        }
        btn.addEventListener('click', handleClickInput)
        return () => {
            btn.removeEventListener('click', handleClickInput)
        }
    }, [])
    const uploadImg = async () => {
        try {
            setLoading(true)
            if (imageFile) {
                const imgRef = ref(storage, `${Date.now()}`);
                await uploadBytes(imgRef, imageFile)
                const url = await getDownloadURL(imgRef)
                await updateDoc(doc(db, 'user', profileData?.userData?.uid), {
                    picture: url
                })
                profileData.setUserData((user: any) => ({ ...user, picture: url }))
                toast.success('Image uploaded successfully')
            }
            URL.revokeObjectURL(image)
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            console.error(error);
            toast.error(error.code)
        }
    }
    useEffect(() => {
        uploadImg()
    }, [imageFile])
    return (
        <div className='flex justify-center'>
            <div className='text-center'>
                <div className='text-left'>
                    <div className='5B5B5B relative h-60 w-60 rounded-full overflow-hidden border'>
                        <Image
                            src={image ? image : profileData?.userData?.picture ? profileData.userData.picture : "/person.jpg"}
                            alt='Non-user Img'
                            width={800}
                            height={800}
                            className='w-full h-full object-cover'
                        />
                        <input
                            onChange={(e) => {
                                if (e.target.files) {
                                    setImage(URL.createObjectURL(e.target.files[0]))
                                    setImageFile(e.target.files[0])
                                }
                            }}
                            ref={inputRef}
                            type="file"
                            className='hidden'
                        />
                        <button
                            ref={btnRef}
                            className='w-full absolute bg-[#5B5B5B] bottom-0 text-white pb-6 pt-3 text-center'>
                            {profileData?.userData?.picture ?
                                'Change Image' :
                                'Add Image'
                            }
                        </button>
                    </div>
                </div>
                {loading ? 'loading....' : ''}
            </div>
        </div>
    )
}

export default ChangeImg