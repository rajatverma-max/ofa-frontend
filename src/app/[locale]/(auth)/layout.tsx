import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default function AuthLayout({children}: Props) {
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
