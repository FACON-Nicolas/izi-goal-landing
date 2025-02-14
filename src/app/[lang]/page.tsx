import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className='grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 bg-background text-primary'>
      <main className='flex flex-col gap-12 items-center text-center max-w-2xl'>
        <h1 className='text-4xl sm:text-6xl font-bold'>{dict.home.title}</h1>

        <p className='text-xl sm:text-2xl text-primary/80'>
          {dict.home.subtitle}
        </p>

        <div className='flex gap-2 items-center flex-col sm:flex-row mt-8'>
          <a
            className='flex items-center gap-2 text-text-button px-2 py-4 rounded-xl hover:opacity-90 transition-opacity'
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={dict.home.appStore}
          >
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'
              alt={dict.home.appStore}
              width={120}
              height={40}
              className='h-10 w-auto'
            />
          </a>

          <a
            className='flex items-center gap-2 text-text-button px-2 py-4 rounded-xl hover:opacity-90 transition-opacity'
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={dict.home.playStore}
          >
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
              alt={dict.home.playStore}
              width={135}
              height={40}
              className='h-10 w-auto'
            />
          </a>
        </div>
      </main>
    </div>
  );
}
