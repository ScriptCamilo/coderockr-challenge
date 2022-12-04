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
    }
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
  },
});
