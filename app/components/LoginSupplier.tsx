'use client';
import { auth, db } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ErrorMsg from './ErrorMsg';
import { LoadingIcon } from './icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginSupplier = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false);
            router.push('/')
        } catch (error: any) {
            setLoading(false);
            console.error(error);
            toast.error(error.code || 'There is an error');
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <div className='space-y-5 pb-10'>
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
                        {...register('password', { required: "Please Enter Password!!!" })}
                        type="password"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Password"
                    />
                    <ErrorMsg message={errors?.password?.message as string} />
                </div>
                <div className='space-y-5'>
                    <button className='w-full sm:w-80 lg:w-96 py-2 rounded-md border-2 border-primary hover:bg-primary duration-200 flex justify-center'>
                        {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Next"}
                    </button>
                    <div className="">
                        <span className="text-[#757575]">
                            Don’t have an Account? <Link className="text-red-500" href={'/login/supplier'}>Register</Link>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginSupplier