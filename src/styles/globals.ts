import { globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  'html, body': {
    fontSize: '37.5%',
    color: '$black',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },

  'button, input, textarea': {
    all: 'unset',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  h1: {
    fontSize: '3.6rem',
    color: '$yellow',
  },

  h2: {
    fontSize: '3.2rem',
    fontWeight: 500,
  },

  p: {
    fontSize: '2.4rem',
  },

  '@bp1': {
    html: {
      fontSize: '50%',
    },
  },

  '@bp2': {
    html: {
      fontSize: '62.5%',
    },
  }
});
