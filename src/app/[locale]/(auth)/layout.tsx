import {ReactNode} from 'react';
import {AuthLayoutProvider} from '../providers';

type Props = {
  children: ReactNode;
};

export default function AuthLayout({children}: Props) {
  return <AuthLayoutProvider>{children}</AuthLayoutProvider>;
}
