import React, { useEffect, useRef, useState } from 'react'
import ErrorMsg from './ErrorMsg'
import Image from 'next/image'
import { useProfileData } from '../profile/profileContext/profileAppContext'
import { LoadingIcon, PhotoIcon } from './icons'
import { useForm } from 'react-hook-form'
import useClickOutside from '../hooks/useClickOutSide'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import toast from 'react-hot-toast'

const UpdateProduct = ({ setOpen, product, setProducts }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    product: any,
    setProducts: any
}) => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
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
    const eleRef = useClickOutside(() => {
        setOpen(false)
        document.body.style.overflowY = 'auto'
    })

    const onSubmit = handleSubmit(
        async (data) => {
            try {
                let productUpdata: any = {
                    name: data.name,
                    price: data.price,
                    userId: profileData.userData.uid,
                    city: profileData.userData.city,
                    address: profileData.userData.address,
                    description: data.description,
                    rate: data.rate
                }
                setLoading(true);
                let url = {};
                if (imageFile) {
                    const imgRef = ref(storage, `${Date.now()}`);
                    await uploadBytes(imgRef, imageFile as File);
                    url = await getDownloadURL(imgRef);
                    productUpdata = { ...productUpdata, img: url }
                }
                const productRef = doc(db, 'product', product.id);
                await updateDoc(productRef, productUpdata);

                toast.success("Product updated Successfully!!!",);
                URL.revokeObjectURL(image)
                setProducts((items: any) => {
                    const index = items.findIndex((i: any) => i.id == product.id)
                    if (index !== -1) {
                        items[index] = {
                            id: product.id,
                            name: data.name,
                            price: data.price,
                            img: productUpdata.img ? productUpdata.img : items[index].img,
                            userId: profileData.userData.uid,
                            city: profileData.userData.city,
                            address: profileData.userData.address,
                            description: data.description,
                            rate: data.rate
                        };
                    }
                    return items
                })
                setLoading(false);
                setOpen(false)
            } catch (error: any) {
                setLoading(false);
                console.error(error);
                toast.error(error.code);
            }
        }
    );


    return (
        <div className='fixed h-full w-full bg-black/20 top-0 left-0 flex justify-center items-center p-container'>
            <div ref={eleRef} className='w-full md:w-[420px] lg:w-[500px] bg-white px-5 py-5 overflow-auto rounded-md max-h-[95svh] hide-'>
                <div>
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
                                        }
                                    }}
                                />
                                {image ?
                                    <div className='h-44 sm:h-52 md:h-64 lg:h-72 xl:h-80'>
                                        <Image
                                            src={image}
                                            alt='image'
                                            height={1000}
                                            width={1000}
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                    :
                                    <div>
                                        <button ref={btnRef} className='w-full h-44 sm:h-52 md:h-64 lg:h-72 xl:h-80 relative flex justify-center items-center group'>
                                            <Image
                                                src={product?.img}
                                                alt='image'
                                                height={1000}
                                                width={1000}
                                                className='h-full w-full object-cover'
                                            />
                                            <div className='absolute w-full h-full bg-slate-100/20 hidden group-hover:flex justify-center items-center duration-100'>
                                                <PhotoIcon className='size-10' />
                                            </div>
                                        </button>
                                    </div>
                                }
                            </div>
                            <div>
                                <input
                                    {...register('name', {
                                        required: "Please Enter Product name!!!!!",
                                        value: product.name
                                    })}
                                    type="text"
                                    className="border py-3 px-2 w-full outline-none"
                                    placeholder="Name"
                                />
                                <ErrorMsg message={errors?.name?.message as string} />
                            </div>
                            <div>
                                <input
                                    {...register('rate', {
                                        required: "Please Enter Product rate!!!!!",
                                        value: product.rate
                                    })}
                                    type="number"
                                    className="border py-3 px-2 w-full outline-none"
                                    placeholder="Rating"
                                />
                                <ErrorMsg message={errors?.rate?.message as string} />
                            </div>
                            <div>
                                <input
                                    {...register('price', {
                                        required: "Please Enter Product price!!!!!",
                                        value: product.price
                                    })}
                                    type="number"
                                    className="border py-3 px-2 w-full outline-none"
                                    placeholder="price"
                                />
                                <ErrorMsg message={errors?.price?.message as string} />
                            </div>
                            <div>
                                <textarea
                                    {...register('description', {
                                        required: "Please Enter Product description!!!!!",
                                        value: product.description
                                    })}
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

export default UpdateProduct