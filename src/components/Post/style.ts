import { styled } from '../../../stitches.config';

export const Container = styled('article', {
  display: 'flex',
  flexDirection: 'column',

  hr: {
    borderTop: 'solid 0',
    width: '95%',
  },

  variants: {
    style: {
      asSection: {
        display: 'flex',
        flexDirection: 'row',
        background: 'White',
        height: '28.4rem',

        hr: {
          display: 'none',
        },

        '&:hover': {
          opacity: '0.8',
        },
      }
    },

    side: {
      even: {
        flexDirection: 'row-reverse',
        background: '$lightGray',
      },
    },
  },
});

export const Figure = styled('figure', {
  margin: 0,
  height: '37rem',
  position: 'relative',
  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 2px 10px 0px',

  variants: {
    style: {
      asSection: {
        margin: 0,
        width: '28.4rem',
        height: '28.4rem',
        boxShadow: 'unset',
      }
    },
  },
});

export const Main = styled('section', {
 variants: {
  style: {
    asSection: {
      padding: '1rem 2.4rem',
      gap: '0.4rem',
      maxWidth: '60%',
    },
  }
 },
});

export const Header = styled('header', {
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
    color: '$darkBlue',
  },

  variants: {
    style: {
      asSection: {
        display: 'flex',
        flexDirection: 'column-reverse',
        padding: 0,
        gap: '0.8rem',

        h1: {
          margin: 0,
          display: '-webkit-box',
          overflow: 'hidden',
          '-webkit-line-clamp': 2,
          '-webkit-box-orient': 'vertical',
        },

        p: {
          fontWeight: 500,
        },

        small: {
          display: 'none',
        },
      },
    },
  },
});

export const Content = styled('section', {
  padding: '0 4.3rem',

  variants: {
    style: {
      asSection: {
        padding: 0,

        p: {
          margin: 0,
          display: '-webkit-box',
          overflow: 'hidden',
          '-webkit-line-clamp': 3,
          '-webkit-box-orient': 'vertical',
        }
      },
    },
  },
});
