import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import CoinSearch from '../components/CoinSearch';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Crypto Price Tracker</title>
      </Head>
      <div className='mb-8 grid h-screen place-items-center'>
        <h1 className='mt-2 mb-6 text-3xl capitalize font-extrabold drop-shadow-2xl leading-none md:text-5xl lg:text-6xl dark:text-white'>
          CRYPTO PRICE TRACKER
        </h1>
        <div className='justify-center mb-4'>
          <button
            className='mr-2 bg-slate-500 text-white font-bold py-2 px-4 border-b-4 border-gray-700 rounded-lg hover:bg-slate-600'
            onClick={() => router.reload()}
          >
            🔄 Reload
          </button>
        </div>
        <CoinSearch />
        <div className='mt-2 mb-4 text-xs'>
          © {new Date().getFullYear()} powered by{' '}
          <Link
            href='https://www.coingecko.com/en/api/documentation'
            target='_blank'
            className='font-bold mb-8 underline'
          >
            CoinGeckoAPI
          </Link>
        </div>
      </div>
    </>
  );
}