import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OTP Verification",
    description: "OTP Verification page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
