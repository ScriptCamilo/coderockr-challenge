import { Rubik } from '@next/font/google';
import type { AppProps } from 'next/app';

import { globalStyles } from '../styles/globals';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <style jsx global>{`
          html {
            font-family: ${rubik.style.fontFamily};
          }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
