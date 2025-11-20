'use client';

import {ReactNode} from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export function AuthLayoutProvider({children}: {children: ReactNode}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-gradient-to-r from-indigo-600 to-indigo-100 p-4">
        Auth header
      </header>
      <main className="p-4">{children}</main>
      <footer className="border-t bg-gradient-to-r from-red-600 to-indigo-600 p-4">
        {' '}
        Auth Footer
      </footer>
    </div>
  );
}

export function PublicLayoutProvider({children}: {children: ReactNode}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="p-4">{children}</main>
      <Footer />
    </div>
  );
}

type ProvidersProps = {
  children: ReactNode;
};

/**
 * Put global client-side providers here (theme, analytics, state, etc.).
 * Layout concerns now live inside the respective segment layouts.
 */
export default function Providers({children}: ProvidersProps) {
  return <>{children}</>;
}
