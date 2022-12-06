import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$yellowLinearGradient',
  minHeight: '100vh',

  '& > header': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '$black',
    color: 'White',
    padding: '2rem 0',

    h1: {
      color: 'White',
    },

    nav: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',

      a: {
        fontSize: '3.2rem',
        fontWeight: 500,
        padding: '0.5rem 1rem',
        borderRadius: '0.8rem',
        transition: '0.2s',

        '&:hover': {
          background: '#00000040',
          opacity: '0.8',
        }
      }
    },
  },

  '@bp2': {
    '& > header': {
      padding: '2.8rem',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'fixed',
      width: '100%',

      h1: {
        margin: 0,
      },

      nav: {
        width: 'unset',
        gap: '11.8rem',
      },

      '& + main': {
        paddingTop: '16.9rem',
      }
    }
  },

  variants: {
    style: {
      post: {
        background: 'White',

        '@bp2': {
          background: '$yellowLinearGradient',
        }
      }
    }
  }
});
