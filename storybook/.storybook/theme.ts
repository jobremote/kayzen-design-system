import { create } from 'storybook/theming/create';

/** Tema da interface do Storybook, com os tokens do Kayene (tema claro). */
export default create({
  base: 'light',
  brandTitle: 'Kayene Design System',
  brandImage: './kayene-lockup.png',
  brandUrl: './',
  brandTarget: '_self',

  colorPrimary: '#2d6ba4', // cornflower-600
  colorSecondary: '#255988', // cornflower-700

  appBg: '#f2f2f2', // stone-25
  appContentBg: '#ffffff',
  appPreviewBg: '#f2f2f2',
  appBorderColor: '#e0e0e0', // stone-50
  appBorderRadius: 16,

  textColor: '#1c1c1c', // stone-1000
  textInverseColor: '#f2f2f2',
  textMutedColor: '#636363', // stone-700

  barBg: '#ffffff',
  barTextColor: '#636363',
  barHoverColor: '#255988',
  barSelectedColor: '#255988',

  inputBg: '#f2f2f2',
  inputBorder: '#bdbdbd',
  inputTextColor: '#1c1c1c',
  inputBorderRadius: 8,

  fontBase: '"Albert Sans", system-ui, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
});
