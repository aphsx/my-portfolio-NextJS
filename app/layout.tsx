"use client";
import '@/app/globals.css';
import Header from '@/components/Navbar';
import { Space_Grotesk } from 'next/font/google';
import { useEffect, useState } from 'react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showButton, setShowButton] = useState(false);

  // ตรวจสอบการเลื่อนหน้าจอ
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ฟังก์ชันกลับไปด้านบน
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* Add meta viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aphsx Blog</title>
      </head>
      <body className="bg-white dark:bg-gray-900 min-h-screen font-sans">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 overflow-x-hidden">
          {/* Header */}
          <Header />
          
          {/* Content */}
          {children}
          
          {/* Footer */}
          <footer className="flex justify-center items-center py-6 text-sm text-gray-500 dark:text-gray-400">
            © 2024 My Blog. All rights reserved.
          </footer>
        </section>

        {/* ปุ่มกลับไปด้านบน */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black text-white hover:bg-blue-500 shadow-lg"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </body>
    </html>
  );
}
