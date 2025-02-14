'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName.split('/')[1];
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const targetLocale = currentLocale === 'fr' ? 'en' : 'fr';

  return (
    <Link
      href={redirectedPathName(targetLocale)}
      className='hover:opacity-80 transition-opacity rounded-full p-2'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-icon'
      >
        <circle cx='12' cy='12' r='10' />
        <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
        <path d='M2 12h20' />
      </svg>
    </Link>
  );
}
