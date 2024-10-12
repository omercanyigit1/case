import {
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
} from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Manrope, sans-serif',
  headings: {
    fontFamily: `Manrope, ${DEFAULT_THEME.fontFamily}`,
  },
});
