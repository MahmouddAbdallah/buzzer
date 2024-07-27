'use client';
import Link from "next/link"
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import ErrorMsg from "./ErrorMsg";
import { LoadingIcon } from "./icons";

const OTPSend = () => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);

    const requestOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!phoneNumber) {
                setError("Please enter a valid phone number");
            }
            else {
                setLoading(true)
                setError("")
                const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                    size: 'invisible',
                })
                const data = await signInWithPhoneNumber(auth, '+' + phoneNumber, recaptchaVerifier);
                router.push(`/login/verification?data=${JSON.stringify(data)}&phone=${phoneNumber}`)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.error(error);
        }
    }
    return (

        <form onSubmit={requestOtp} className="">
            <div className=" h-[53svh] flex flex-col justify-between">
                <div>
                    <PhoneInput
                        country={'eg'}
                        value={phoneNumber}
                        onChange={(phone) => {
                            setPhoneNumber(phone)
                            setError("")
                        }}
                        inputClass="border py-3 px-2 w-full sm:w-80 lg:w-96 outline-none"
                        placeholder="Phone Number"
                    />
                    <ErrorMsg message={error as string} />
                    <div id="recaptcha-container" />
                </div>
                <div className=" w-full sm:w-fit space-y-5">
                    <button className='w-full sm:w-80 lg:w-96 py-2 rounded-md border-2 border-primary hover:bg-primary duration-200 flex justify-center'>
                        {loading ? <LoadingIcon className='w-6 h-6 animate-spin' /> : "Submit"}
                    </button>
                </div>
            </div>
        </form>

    )
}

export default OTPSend