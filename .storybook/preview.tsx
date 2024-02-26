import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/components/theme-provider';
import { ThemeToggle } from '../src/components/theme-toggle';
import '../src/styles.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="system" storageKey="elek-io-client-theme">
        <div className="absolute top-4 right-4">
          <ThemeToggle></ThemeToggle>
        </div>

        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
