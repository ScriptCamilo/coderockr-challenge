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
      marginTop: '2.4rem',

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

  main: {
    margin: 'auto',
  },

  '@bp2': {
    paddingBottom: '21.8rem',

    '& > header': {
      padding: '2.8rem',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'fixed',
      width: '100%',

      nav: {
        width: 'unset',
        gap: '11.8rem',
        margin: 0,
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

          '& > header': {
            '& + main': {
              paddingTop: '20.9rem',
            }
          }
        }
      }
    }
  }
});
