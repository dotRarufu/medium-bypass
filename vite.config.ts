import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig(config => {
  return {
    plugins: [
      monkey({
        entry: 'src/index.ts',
        userscript: {
          match: ['*://*.medium.com/*'],
        },
      }),
    ],
  };
});
