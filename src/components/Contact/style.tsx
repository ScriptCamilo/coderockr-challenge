import { css, styled } from '../../../stitches.config';

export const overlay = css({
  position: 'fixed',
  inset: 0,
  backgroundColor: '#00000060'
});

export const content = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'White',
  maxWidth: '81rem',
  width: '80vw',
  padding: '4.2rem 6.2rem',
  borderRadius: '0.8rem',
});

export const CloseButton = styled('button', {
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  padding: '1.2rem',
  cursor: 'pointer',
  transition: '0.2s',

  '&:hover': {
    backgroundColor: '#00000030',
  },

  '& svg': {
    height: '2.8rem',
    width: '2.8rem',
  }
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4.8rem',
  width: '100%',

  '& label': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    fontSize: '2.4rem',
    color: 'Black',
    width: '100%',
    maxWidth: '56.5rem',

    '& input, & textarea': {
      padding: '1.6rem 1.8rem 1.8rem 1.6rem',
      border: '0.1rem solid $black',
      borderRadius: '0.4rem',

      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.51)'
      },

      '&:focus': {
        border: '0.1rem solid $yellow',
        outline: '$yellow solid 0.2rem',
      },
    },

    '& textarea': {
      resize: 'none',
      height: '20rem',
    },
  }
});

export const SubmitButton = styled('button', {
  display: 'flex',
  borderRadius: '0.4rem',
  height: '3rem',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.8rem',
  fontSize: '2.4rem',
  fontWeight: 500,
  padding: '1.6rem 3.4rem',
  background: '$black',
  color: 'White',
  cursor: 'pointer',
  transition: '0.2s',

  '&:hover': {
    opacity: '0.8',
  },

  '& svg': {
    height: '2.4rem',
    width: '2.4rem',
  }
});
