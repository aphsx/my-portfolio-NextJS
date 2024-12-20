import './globals.css';
import Header from '@/components/Navbar';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', 
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-white dark:bg-gray-900 min-h-screen font-sans">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          {/* Header */}
          <Header />
          
          {/* Content */}
          {children }
          
          {/* Footer */}
          <footer className="flex justify-center items-center py-6 text-sm text-gray-500 dark:text-gray-400">
            © 2024 My Blog. All rights reserved.
          </footer>
        </section>
      </body>
    </html>
  );
}
