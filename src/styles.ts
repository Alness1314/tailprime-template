import { definePreset } from '@primeng/themes';
import Material from '@primeng/themes/material';

export const MyPreset = definePreset(Material, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{violet.50}',
          100: '{violet.300}',
          200: '{violet.300}',
          300: '{violet.300}',
          400: '{violet.400}',
          500: '{violet.500}',
          600: '{violet.600}',
          700: '{violet.700}',
          800: '{violet.800}',
          900: '{violet.900}',
          950: '{violet.950}',
        }
      },
      dark: {
        primary: {
          50: '{violet.50}',
          100: '{violet.300}',
          200: '{violet.300}',
          300: '{violet.300}',
          400: '{violet.400}',
          500: '{violet.500}',
          600: '{violet.600}',
          700: '{violet.700}',
          800: '{violet.800}',
          900: '{violet.900}',
          950: '{violet.950}',
        }
      },
    },
  },
});
