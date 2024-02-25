import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <div className={"border-b-4 w-full p-6 flex justify-between items-center"}>
          <a href="/" className={"text-2xl font-bold titillium-web-regular align-bottom"}>TaskMaster</a>
          <a href="/"  className={"text-xl"}>Home</a>
          <div className={"flex"}>
            <a href="/Login" className={"px-3 py-2 rounded-full font-bold me-5 text-xl bg-lime-200"}>Login</a>
            <a href="/Register" className={"px-3 py-2 rounded-full font-bold text-xl bg-teal-200"}>Register</a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
