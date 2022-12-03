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

    }
  },
  media: {
    bp1: '(min-width: 640px)',
  },
});
