import {ReactNode} from 'react';
import {PublicLayoutProvider} from '../providers';

type Props = {
  children: ReactNode;
};

export default function PublicLayout({children}: Props) {
  return <PublicLayoutProvider>{children}</PublicLayoutProvider>;
}
