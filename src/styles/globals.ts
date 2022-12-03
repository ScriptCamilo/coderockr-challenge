import { globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontSize: '62.5%',
    background: 'Black',
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
