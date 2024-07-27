'use client';
import { auth, db, storage } from '@/firebase';
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ErrorMsg from './ErrorMsg';
import { LoadingIcon, PhotoIcon } from './icons';
import Link from 'next/link';
import { useRouter, } from 'next/navigation';
import Image from 'next/image';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const ConfirmLoginSupplier = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState<File>();
    const btnRef = useRef<any>();
    const inputRef = useRef<any>();

    const [data, setData] = useState<any>({})
    useEffect(() => {
        const supplierData = localStorage?.getItem('supplierData') || "{}"
        setData(JSON.parse(supplierData as string));
    }, [])
    console.log(data);


    useEffect(() => {
        const input = inputRef.current;
        const btn = btnRef.current;
        const handleClickInput = (e: any) => {
            e.preventDefault()
            input.click()
        }
        btn.addEventListener('click', handleClickInput)
        return () => {
            btn.removeEventListener('click', handleClickInput)
        }
    }, [])

    const onSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true);
            let url = "";
            if (imageFile) {
                const imgRef = ref(storage, `${Date.now()}`);
                await uploadBytes(imgRef, imageFile as File);
                url = await getDownloadURL(imgRef);
            }
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;

            await setDoc(doc(db, 'user', user.uid), {
                name: data.name,
                email: data.email,
                phone: data.phone,
                type: data.type,
                uid: user.uid,
                picture: url,
                address: formData.address,
                city: formData.city,
                role: 'supplier'
            });
            localStorage.removeItem('supplierData')
            URL.revokeObjectURL(image)
            setLoading(false);
            toast.success('Successfully created account!');
            router.push('/');
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
                        {...register('address', { required: "Please Enter address!!!" })}
                        type="address"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Address"
                    />
                    <ErrorMsg message={errors?.address?.message as string} />
                </div>
                <div>
                    <input
                        {...register('city', { required: "Please Enter city!!!" })}
                        type="city"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="City"
                    />
                    <ErrorMsg message={errors?.city?.message as string} />
                </div>
                <div className='space-y-2'>
                    <span className='block text-black/30 font-medium'>
                        Attach Your Display Picture
                    </span>
                    <div className=''>
                        <input
                            ref={inputRef}
                            type="file"
                            className='hidden'
                            onChange={(e) => {
                                e.preventDefault()
                                if (e.target.files) {
                                    setImage(URL.createObjectURL(e.target.files[0]))
                                    setImageFile(e.target.files[0] as File)
                                }
                            }}
                        />
                        {image ?
                            <Image
                                src={image}
                                alt='image'
                                height={1000}
                                width={1000}
                                className='w-full sm:w-80 lg:w-96 h-44 object-cover'
                            />
                            :
                            <button ref={btnRef} className='w-full sm:w-80 lg:w-96 h-44 bg-slate-200 rounded-md flex justify-center items-center hover:bg-slate-300 duration-100'>
                                <PhotoIcon className='size-10' />
                            </button>
                        }
                    </div>
                </div>
                <div className='space-y-5'>
                    <button disabled={loading} className='w-full sm:w-80 lg:w-96 py-2 rounded-md border-2 border-primary hover:bg-primary duration-200 flex justify-center'>
                        {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Submit"}
                    </button>
                    <div className="">
                        <span className="text-[#757575]">
                            Already have an account? <Link className="text-red-500" href={'/login/supplier/login'}>Login Here</Link>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ConfirmLoginSupplier