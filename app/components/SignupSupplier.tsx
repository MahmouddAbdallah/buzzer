'use client';
import { auth, db } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ErrorMsg from './ErrorMsg';
import { LoadingIcon } from './icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignupSupplier = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        setLoading(true)
        localStorage.setItem('supplierData', JSON.stringify(data))
        setLoading(false)
        router.push(`/login/supplier/confirm`)
    });

    return (
        <form onSubmit={onSubmit}>
            <div className='space-y-5 pb-10'>
                <div>
                    <select
                        {...register('type', { required: "Please Enter Name!!!" })}
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                    >
                        <option value="restaurant">Restaurant</option>
                        <option value="cafe">Cafe</option>
                    </select>
                    <ErrorMsg message={errors?.type?.message as string} />
                </div>
                <div>
                    <input
                        {...register('name', { required: "Please Enter Name!!!" })}
                        type="text"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Full Name"
                    />
                    <ErrorMsg message={errors?.name?.message as string} />
                </div>
                <div>
                    <input
                        {...register('email', { required: "Please Enter email!!!" })}
                        type="email"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Email"
                    />
                    <ErrorMsg message={errors?.email?.message as string} />
                </div>
                <div>
                    <input
                        {...register('phone', { required: "Please Enter phone!!!" })}
                        type="tel"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Phone"
                    />
                    <ErrorMsg message={errors?.phone?.message as string} />
                </div>
                <div>
                    <input
                        {...register('password', { required: "Please Enter Password!!!" })}
                        type="password"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Password"
                    />
                    <ErrorMsg message={errors?.password?.message as string} />
                </div>
                <div className='space-y-5'>
                    <button disabled={loading} className='w-full sm:w-80 lg:w-96 py-2 rounded-md border-2 border-primary hover:bg-primary duration-200 flex justify-center'>
                        {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Next"}
                    </button>
                    <div className="">
                        <span className="text-[#757575]">
                            Already you have account? <Link className="text-red-500" href={'/login/supplier/login'}>Login</Link>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignupSupplier