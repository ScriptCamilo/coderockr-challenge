import type { AppProps } from 'next/app';
import { globalCss } from '../../stitches.config';

const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}
