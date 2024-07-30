import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Products",
    description: "Products page",
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
