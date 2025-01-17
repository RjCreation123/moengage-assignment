import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoEngage Dog Assignment",
  description: "Made by Reahul Jaiswal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <AuthProvider>
    
      <body className={inter.className}>{children}
      <Toaster />
      </body>
      
      
      </AuthProvider>
    </html>
  );
}
