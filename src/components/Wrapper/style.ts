import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(90deg, #F1A10A 0%, #342303 100%)',
  height: '100%',

  '& > header': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '$black',
    color: 'White',
    // TODO: Implement in header
    // marginBottom: '6rem',

    nav: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
    },
  },

  variants: {
    style: {
      post: {
        background: 'White',
      }
    }
  }
});
