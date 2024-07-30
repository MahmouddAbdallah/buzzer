'use client';
import ErrorMsg from '@/app/components/ErrorMsg';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useProfileData } from '../../profileContext/profileAppContext';
import toast from 'react-hot-toast';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { LoadingIcon } from '@/app/components/icons';

const EidtProfile = () => {
    const [able, setAble] = useState(false)
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const profileData = useProfileData();
    console.log(profileData.userData);

    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true)
            const userRef = doc(db, 'user', profileData.userData.uid);
            await updateDoc(userRef, { ...data });
            toast.success('successfully updated!!')
            profileData.setUserData({
                uid: profileData?.userData?.uid,
                picture: profileData?.userData?.picture,
                ...data
            })
            setAble(false)
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            console.error(error);
            toast.error(error.code)
        }
    })

    return (
        <div className='flex justify-center'>
            <div className='w-[calc(186px*2)] py-5'>
                <form onSubmit={onSubmit}>
                    {profileData?.userData &&
                        <div  >
                            <div className='space-y-3'>
                                <div>
                                    <div>
                                        <input
                                            disabled={!able}
                                            {...register('name', {
                                                required: "Please Enter name!!!!!",
                                                value: profileData?.userData?.name ? profileData?.userData?.name : "~"
                                            })}
                                            type="text"
                                            className="border py-3 px-2 w-full outline-none"
                                            placeholder="Name"
                                        />
                                        <ErrorMsg message={errors?.name?.message as string} />
                                    </div>
                                </div>
                                <div>
                                    {
                                        profileData.userData.role != 'user' &&
                                        profileData?.userData?.phone &&
                                        <div>
                                            <input
                                                disabled={!able}
                                                {...register('phone', {
                                                    required: "Please Enter phone!!!!!",
                                                    value: profileData?.userData?.phone
                                                })}
                                                type="text"
                                                className="border py-3 px-2 w-full outline-none"
                                                placeholder="phone"
                                            />
                                            <ErrorMsg message={errors?.phone?.message as string} />
                                        </div>
                                    }
                                </div>
                                <div>
                                    {
                                        profileData?.userData?.type &&
                                        <div>
                                            <select
                                                disabled={!able}
                                                {...register('type', {
                                                    required: "Please Enter type!!!!!",
                                                    value: profileData?.userData?.type
                                                })}
                                                className="border py-3 px-2 w-full outline-none"
                                            >
                                                <option value="restaurant">Restaurant</option>
                                                <option value="cafe">Cafe</option>
                                            </select>
                                            <ErrorMsg message={errors?.type?.message as string} />
                                        </div>
                                    }
                                </div>
                                <div>
                                    {
                                        <div>
                                            <input
                                                disabled={!able}
                                                {...register('email', {
                                                    value: profileData?.userData?.email ? profileData?.userData?.email : ""
                                                })}
                                                type="email"
                                                className="border py-3 px-2 w-full outline-none"
                                                placeholder="Email"
                                            />
                                            <ErrorMsg message={errors?.email?.message as string} />
                                        </div>
                                    }
                                </div>
                                <div>
                                    {
                                        profileData?.userData?.address &&
                                        <div>
                                            <input
                                                disabled={!able}
                                                {...register('address', {
                                                    required: "Please Enter address!!!!!",
                                                    value: profileData?.userData?.address
                                                })}
                                                type="text"
                                                className="border py-3 px-2 w-full outline-none"
                                                placeholder="address"
                                            />
                                            <ErrorMsg message={errors?.address?.message as string} />
                                        </div>
                                    }
                                </div>
                                <div>
                                    {
                                        profileData?.userData?.city &&
                                        <div>
                                            <input
                                                disabled={!able}
                                                {...register('city', {
                                                    required: "Please Enter city!!!!!",
                                                    value: profileData?.userData?.city
                                                })}
                                                type="text"
                                                className="border py-3 px-2 w-full outline-none"
                                                placeholder="city"
                                            />
                                            <ErrorMsg message={errors?.city?.message as string} />
                                        </div>
                                    }
                                </div>
                                <div className='flex gap-3'>
                                    <button disabled={!able} className='w-full py-2 border disabled:bg-gray-100 hover:bg-primary duration-150 flex justify-center'>
                                        {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Submit"}
                                    </button>
                                    <button disabled={able} onClick={(e) => {
                                        e.preventDefault()
                                        setAble(true)
                                    }} className='w-full py-2 border disabled:bg-gray-100 hover:bg-primary duration-150'>Eidt</button>
                                </div>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default EidtProfile