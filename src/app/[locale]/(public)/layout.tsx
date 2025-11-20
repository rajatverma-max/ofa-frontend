import Footer from '@/components/footer';
import Header from '@/components/header';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default function PublicLayout({children}: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4">{children}</main>
      <Footer />
    </div>
  );
}
