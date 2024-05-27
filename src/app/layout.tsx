import type { Metadata } from "next";
import { Nunito, Nunito_Sans} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap', 
  variable:'--font-nunito'
});
const nunito_Sans = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-nunito-sans'
});

export async function generateMetadata(): Promise<Metadata> {
  const client=createClient();
  const settings=await client.getSingle("settings"); 

  return {
    title: settings.data.site_title || "Flowrise",
    description:settings.data.metaa_description || "flowrise is the relaxing app for you.",

    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_Sans.variable)}>
      <body>
        <Header/>
        
        {children}
        <Footer/>
        <div className="fixed bg-gradient-to-tr from-emerald-500 to-cyan-50 z-[-1] inset-0  opacity-30" ></div>


      </body>
    </html>
  );
}
