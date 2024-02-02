import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SliderBar from "@/components/SlideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className} >
              <div className={'flex'}>
                <SliderBar />
                <div className="w-full h-full">{children}</div>
            </div>
         </body>
    </html>
  );
}
