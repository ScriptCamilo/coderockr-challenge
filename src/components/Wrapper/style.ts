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
    margin: '0 auto',
  },

  '@bp2': {
    paddingBottom: '21.8rem',

    '& > header': {
      padding: '2.8rem',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      width: '100%',
      zIndex: 2,

      nav: {
        width: 'unset',
        gap: '11.8rem',
        margin: 0,
      },

      '& + main': {
        paddingTop: '16.9rem',
      },
    },

    main: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      rowGap: '8rem',
      margin: 0,

      '& > section:nth-child(3n + 1)': {
        gridColumnStart: 1,
        gridColumnEnd: 3,
      },

      '& > section:nth-child(3n + 2)': {
        gridColumnStart: 3,
        gridColumnEnd: 5,
      },

      '& > section:nth-child(3n + 3)': {
        height: '64rem',
        gridColumnStart: 2,
        gridColumnEnd: 5,

        '& figure': {
          maxWidth: '640rem',
          maxHeight: '64rem',
          height: '100%',
          width: '100%',
        },

        '&:nth-child(even)': {
          gridColumnStart: 1,
          gridColumnEnd: 4,
        },

        '& article': {
          gridTemplateColumns: '1fr 1fr',
          justifyItems: 'center',
          height: '100%',
        },
      },
    },
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
            },
          },

          main: {
            all: 'unset',
            margin: '0 auto',
          },
        },
      },
    },
  },
});
