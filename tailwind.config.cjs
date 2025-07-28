const plugin = require('daisyui');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './src-tauri/**/*.{rs}'],
  plugins: [plugin],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          'base-200': '#0a1833', // dark blue
        }
      }
    ],
    base: true,       // ensure base theme CSS like --b2 is injected
    styled: true,     // allows DaisyUI utility classes
    utils: true,      // allows `btn`, `card`, etc.
    logs: true        // helpful logs to confirm themes are injected
  }
};
