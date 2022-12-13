import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  ...defaultThemeMap,
  theme: {
    colors: {
      black: '#2D2D2D',
      yellow: '#F1A10A',
      yellowLinearGradient: 'linear-gradient(90deg, #F1A10A 0%, #342303 100%)',
      darkBlue: '#032937',
      lightGray: '#EAEDED',
    }
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 869px)',
  },
});
