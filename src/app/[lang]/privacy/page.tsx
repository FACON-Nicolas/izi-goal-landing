import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Privacy({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className='min-h-screen p-8 bg-background text-primary max-w-3xl mx-auto'>
      <main className='space-y-12'>
        <h1 className='text-4xl font-bold mb-12'>{dict.privacy.title}</h1>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>
            {dict.privacy.lastUpdate} : {new Date().toLocaleDateString(lang)}
          </h2>
          <p>{dict.privacy.welcome}</p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>
            {dict.privacy.dataCollection.title}
          </h2>
          <p>{dict.privacy.dataCollection.description}</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>{dict.privacy.dataCollection.points.storage}</li>
            <li>{dict.privacy.dataCollection.points.noAccount}</li>
            <li>{dict.privacy.dataCollection.points.noSharing}</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>{dict.privacy.legal.title}</h2>
          <div className='space-y-2'>
            <p>{dict.privacy.legal.developedBy}</p>
            <p>Nicolas Facon</p>
            <p>1 rue du marais</p>
            <p>62980 Vermelles</p>
            <p>France</p>
            <p>Contact : faconicolas@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}
