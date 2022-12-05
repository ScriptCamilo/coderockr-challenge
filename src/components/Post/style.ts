import { styled } from '../../../stitches.config';

export const Container = styled('article', {
  display: 'flex',
  flexDirection: 'column',

  hr: {
    borderTop: 'solid 0',
    width: '95%',
  }
});

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',

  figure: {
    margin: 0,
    height: '37rem',
    position: 'relative',
  },
});

export const Description = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 4.3rem',

  h1: {
    marginBottom: '3rem',
  },

  p: {
    margin: 0,
  },

  small: {
    fontSize: '1.8rem',
    display: 'none',
  }
});

export const Content = styled('section', {
  padding: '0 4.3rem',
});
