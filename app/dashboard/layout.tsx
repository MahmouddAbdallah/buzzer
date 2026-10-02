import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import NavbarDashboard from "./components/NavbarDashboard";
export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-cols-12 ">
            <div className="fixed lg:sticky top-0 z-50 h-svh lg:col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-12 lg:col-span-10 h-full bg-gray-50 px-10">
                <NavbarDashboard />
                {children}
            </div>
        </div>
    );
}