import { Locale, i18n } from '@/i18n-config';
import LocaleSwitcher from '@/components/locale-switcher';
import '../globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className='bg-background text-primary'>
        <header className='px-4 bg-background text-text-button'>
          <LocaleSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}
