import { LogoBlackIcon, } from "../../components/icons"
import login1Img from '../../assets/login2.svg'
import Image from "next/image"
import OTPVerify from "@/app/components/OTPVerify"
import { redirect } from "next/navigation"
const Page = ({ searchParams }: { searchParams: any }) => {
    const { phone, data } = searchParams;
    if (!phone || !data) {
        redirect('/login')
    }
    return (
        <div className="p-container lg:py-10 h-svh">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <div className="flex justify-center sm:justify-start">
                        <LogoBlackIcon className="size-44" />
                    </div>
                    <div className="pt-5 w-full space-y-5">
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Login code</h5>
                            <span className="block text-[#757575]">
                                Enter the authentication code we sent at*******{phone?.slice(-4)}
                            </span>
                        </div>
                        <OTPVerify />
                    </div>
                </div>
                <div className="hidden md:block md:col-span-6">
                    <Image
                        src={login1Img}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Page