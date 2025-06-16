'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const hideHeaderFooter = pathname === '/not-found';

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}