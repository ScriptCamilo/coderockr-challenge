import { globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontSize: '50%',
    color: 'White',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },

  '*': {
    boxSizing: 'border-box',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  'h1, h2': {
    marginTop: 0,
  },

  h1: {
    fontSize: '3.6rem',
  },

  h2: {
    fontSize: '3.2rem',
    fontWeight: 500,
  },

  '@bp1': {
    html: {
      fontSize: '56.25%',
    },
  },

  '@bp2': {
    html: {
      fontSize: '62.5%',
    },
  }
});
