import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Edit account",
    description: "Edit account page",
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
