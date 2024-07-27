'use client'
import ErrorMsg from '@/app/components/ErrorMsg';
import { LoadingIcon, PhotoIcon } from '@/app/components/icons';
import { db, storage } from '@/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useProfileData } from '../../profileContext/profileAppContext';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors, reset } = useForm()

    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const btnRef = useRef<any>()
    const inputRef = useRef<any>()
    const profileData = useProfileData()

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

    const onSubmit = handleSubmit(
        async (data) => {
            try {
                if (!imageFile) {
                    setError("img", { message: "Please Enter Product photo!!!!!" });
                    return;
                }
                setLoading(true);
                const imgRef = ref(storage, `${Date.now()}`);
                await uploadBytes(imgRef, imageFile as File);
                const url = await getDownloadURL(imgRef);

                const productRef = doc(collection(db, 'product'));

                await setDoc(productRef, {
                    name: data.name,
                    price: data.price,
                    img: url,
                    userId: profileData.userData.uid,
                    city: profileData.userData.city,
                    address: profileData.userData.address,
                    description: data.description,
                    rate: data.rate
                });
                toast.success("Product Added Successfully!!!",);
                reset();
                URL.revokeObjectURL(image)
                setImage('')
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                console.error(error);
                toast.error(error.code);
            }
        }
    );

    return (
        <div className='p-container'>
            <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Add Product:</h1>
            <div className="flex justify-center py-10">
                <div className='w-full sm:w-96 md:w-[420px] lg:w-[500px]'>
                    <form onSubmit={onSubmit}>
                        <div className='space-y-5'>
                            <div className=''>
                                <input
                                    ref={inputRef}
                                    type="file"
                                    className='hidden'
                                    onChange={(e) => {
                                        e.preventDefault()
                                        if (e.target.files) {
                                            setImage(URL.createObjectURL(e.target.files[0]))
                                            setImageFile(e.target.files[0])
                                            clearErrors('img')
                                        }
                                    }}
                                />
                                {image ?
                                    <Image
                                        src={image}
                                        alt='image'
                                        height={1000}
                                        width={1000}
                                    />
                                    :
                                    <div>
                                        <button ref={btnRef} className='w-full h-44 sm:h-52 md:h-64 lg:h-72 xl:h-80 bg-slate-200 rounded-md flex justify-center items-center hover:bg-slate-300 duration-100'>
                                            <PhotoIcon className='size-10' />
                                        </button>
                                        <ErrorMsg message={errors?.img?.message as string} />
                                    </div>
                                }
                            </div>
                            <div>
                                <input
                                    {...register('name', { required: "Please Enter Product name!!!!!" })}
                                    type="text"
                                    className="border py-3 px-2 w-full outline-none"
                                    placeholder="Name"
                                />
                                <ErrorMsg message={errors?.name?.message as string} />
                            </div>
                            <div>
                                <input
                                    {...register('rate', { required: "Please Enter Product rate!!!!!" })}
                                    type="number"
                                    className="border py-3 px-2 w-full outline-none"
                                    placeholder="Rating"
                                />
                                <ErrorMsg message={errors?.rate?.message as string} />
                            </div>
                            <div>
                                <input
                                    {...register('price', { required: "Please Enter Product price!!!!!" })}
                                    type="number"
                                    className="border py-3 px-2 w-full outline-none"
                                    placeholder="price"
                                />
                                <ErrorMsg message={errors?.price?.message as string} />
                            </div>
                            <div>
                                <textarea
                                    {...register('description', { required: "Please Enter Product description!!!!!" })}
                                    className="border py-3 px-2 w-full outline-none h-40 resize-none"
                                    placeholder="Description"
                                />
                                <ErrorMsg message={errors?.description?.message as string} />
                            </div>
                            <div className=" w-full ">
                                <button disabled={loading} className='w-full  py-2 rounded-md border-2 border-primary hover:bg-primary duration-200 flex justify-center'>
                                    {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Submit"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct