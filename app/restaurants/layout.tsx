import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Restaurants",
    description: "restaurants page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <header className='bg-[url("/restaurants.jpg")] bg-cover bg-center bg-no-repeat h-[65svh]'>
                <div className='bg-black/70 h-full'>
                    <Navbar mode={'light'} />
                    <div className='h-1/2 flex items-center justify-center text-white'>
                        <div className='text-center'>
                            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium'>Restaurants</h3>
                            <span>Home / Restaurants</span>
                        </div>
                    </div>
                </div>
            </header>
            {children}
            <Footer />
        </div>
    );
}
