import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Add Product",
    description: "Add Product page",
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
