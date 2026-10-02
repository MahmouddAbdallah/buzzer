'use client'
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { auth, db } from "@/firebase"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import ErrorMsg from "./ErrorMsg"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { LoadingIcon } from "./icons"

const OTPVerify = () => {
    const query = useSearchParams()
    const [loading, setLoading] = useState(false);
    const data = JSON.parse(query.get('data') as string);
    const phone = JSON.parse(query.get('phone') as string);
    const verificationId = data.verificationId
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter();

    const verifyOTP = handleSubmit(
        async (data) => {
            try {
                setLoading(true)
                const credential = PhoneAuthProvider.credential(verificationId, data.otp);
                const user = await signInWithCredential(auth, credential);
                const userRef = await doc(db, 'user', user.user.uid);
                const findUser = await getDoc(userRef);
                if (!findUser) {
                    await setDoc(doc(db, "user", user.user.uid), {
                        phone: phone,
                        uid: user.user.uid,
                        role: 'user'
                    })
                }
                setLoading(false)
                router.push(`/`)
            } catch (error: any) {
                setLoading(false)
                console.error(error);
                switch (error.code) {
                    case 'auth/code-expired':
                        toast.error('Code Expired')
                        break;
                    case 'auth/invalid-verification-code':
                        toast.error('Invalid Code');
                        break;
                    default:
                        toast.error(error.code)
                }
            }
        }
    )
    return (
        <form onSubmit={verifyOTP} className="">
            <div className=" h-[48svh] flex flex-col justify-between">
                <div>
                    <input
                        {...register('otp', { required: "Please Enter Otp Code!!!!!" })}
                        type="tel"
                        className="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Login Code"
                    />
                    <ErrorMsg message={errors?.otp?.message as string} />
                </div>
                <div className=" w-full sm:w-fit space-y-5">
                    <button disabled={loading} className='w-full sm:w-80 lg:w-96 py-2 rounded-md border-2 border-primary hover:bg-primary duration-200 flex justify-center'>
                        {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Submit"}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default OTPVerify