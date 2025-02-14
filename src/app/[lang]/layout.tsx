'use client';

import LocaleSwitcher from '@/components/locale-switcher';
import '../globals.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body className='bg-background text-primary'>
        <header className='px-4 bg-background text-text-button'>
          <LocaleSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}
