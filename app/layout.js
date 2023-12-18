import Head from 'next/head';
import './globals.css';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React,{lazy} from 'react';

export const metadata = {
  title: 'Free Temporary Phone Numbers for SMS Verification,| Recieve SMS Online',
  description: '',
}

const LazyHeader=lazy(() => import('../components/Header'));
const LazySideBar=lazy(() => import('../components/SideBar'));
const LazyFooter=lazy(() => import('../components/Footer'));



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <LazyHeader />
        <div className="flex-1 lg:flex lg:flex-row-reverse">
          <main className="lg:flex-1">
            {children}
          </main>
          <aside className="lg:w-1/4">
            <LazySideBar />
          </aside>
        </div>
        <LazyFooter />
      </body>
    </html>
  )
}
