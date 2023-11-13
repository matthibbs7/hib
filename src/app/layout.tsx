import { Footer } from "@/components/Footer/Footer";
import "./globals.css";
import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "mh",
    description: "software engineer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
