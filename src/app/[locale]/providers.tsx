'use client';

import {ReactNode} from 'react';
import {usePathname} from 'next/navigation';
import Header from '../../components/header';
import Footer from '../../components/footer';

function AuthLayoutProvider({children}: {children: ReactNode}) {
  return (
    // put auth-specific providers here (SessionProvider, AuthContext, etc.)
    <div className="min-h-screen bg-slate-50">
      <header className="border-b p-4 bg-white">/* Auth Header */</header>
      <main className="p-4">{children}</main>
      <footer className="border-t p-4 bg-white">/* Auth Footer */</footer>
    </div>
  );
}

function PublicLayoutProvider({children}: {children: ReactNode}) {
  return (
    // public providers (theme, analytics, etc.)
    <div className="min-h-screen">
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
 * Switch providers/layouts based on route.
 * Here we assume all auth routes live under /auth or /dashboard (modify as needed).
 */
export default function Providers({children}: ProvidersProps) {
  const pathname = usePathname() ?? '/';

  // define your auth route patterns
  const isAuthRoute =
    pathname.startsWith('/auth') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/account');

  // Optionally, you could check client-side auth state here (from Zustand, localStorage, etc.)
  // const isLoggedIn = useYourAuthHook();

  if (isAuthRoute) {
    return <AuthLayoutProvider>{children}</AuthLayoutProvider>;
  }

  return <PublicLayoutProvider>{children}</PublicLayoutProvider>;
}
