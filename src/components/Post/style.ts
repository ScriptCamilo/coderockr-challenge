import { styled } from '../../../stitches.config';

export const Container = styled('article', {
  display: 'flex',
  flexDirection: 'column',

  hr: {
    borderTop: 'solid 0',
    width: '95%',
  },

  '@bp2': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    gridTemplateAreas: `
    'image image'
    'header header'
    'content content'
    `,
    background: 'White',
    margin: '1.6rem',
    maxWidth: '128rem',
  },

  '@bp3': {
    gridTemplateAreas: `
    'image header'
    'content content'
    `,
  },

  variants: {
    style: {
      asSection: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateAreas: `
          'image header'
          'image content'
        `,
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
        gridTemplateColumns: '2fr 1fr',
        gridTemplateAreas: `
          'header image'
          'content image'
        `,
        background: '$lightGray',
      },
    },
  },
});

export const Figure = styled('figure', {
  height: '37rem',
  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 2px 10px 0px',
  gridArea: 'image',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },

  '@bp2': {
    width: '64rem',
    height: '64rem',
    boxShadow: 'unset',
  },

  variants: {
    style: {
      asSection: {
        maxWidth: '28.4rem',
        maxHeight: '28.4rem',
        boxShadow: 'unset',

        img: {
          objectFit: 'cover',
        },
      }
    },
  },
});

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 4.3rem',
  gridArea: 'header',

  h1: {
    marginBottom: '3rem',
  },

  small: {
    fontSize: '1.8rem',
    color: '$darkBlue',
  },

  '@bp2': {
    flexDirection: 'column-reverse',
    maxWidth: 'unset',
    margin: 'auto',
    gap: '3.2rem',

    small: {
      marginBottom: '1.2rem',
    }
  },

  '@bp3': {
    maxWidth: '50rem',
  },

  variants: {
    style: {
      asSection: {
        display: 'flex',
        flexDirection: 'column-reverse',
        padding: '0 2rem',
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
  padding: '4rem 4.3rem',
  gridArea: 'content',

  '@bp2': {
    maxWidth: '78rem',
  },

  '@bp3': {
    padding: '12.4rem 0 16.8rem',
  },

  variants: {
    style: {
      asSection: {
        padding: '0 2rem',

        p: {
          display: '-webkit-box',
          overflow: 'hidden',
          '-webkit-line-clamp': 3,
          '-webkit-box-orient': 'vertical',
        }
      },
    },
  },
});
