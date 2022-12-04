import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  background: 'linear-gradient(90deg, #F1A10A 0%, #342303 100%)',

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
      background: '$black',

    nav: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
    },

    '@bp1': {
      background: 'Pink',
    }
  }
});
