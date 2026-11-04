import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import type { Plugin } from 'vite';

const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

/**
 * O Tailwind v4 usa um módulo nativo (oxide). Em máquinas com política de Controle de Aplicativo
 * do Windows que bloqueia módulos nativos não assinados ele não carrega. Com KDS_TAILWIND_BROWSER=1
 * o catálogo usa a versão do Tailwind que compila no navegador (sem módulo nativo). O build oficial
 * (CI) usa o plugin normal do Vite.
 */
const browserMode = process.env.KDS_TAILWIND_BROWSER === '1';

function tailwindBrowser(): Plugin {
  const themeCss = fs.readFileSync(path.resolve(here, '../../src/design-system/kayene/styles/theme.css'), 'utf8');
  const script = fs.readFileSync(require.resolve('@tailwindcss/browser'), 'utf8');
  return {
    name: 'kds-tailwind-browser',
    transformIndexHtml() {
      return [
        { tag: 'script', children: script, injectTo: 'head' },
        { tag: 'style', attrs: { type: 'text/tailwindcss' }, children: themeCss, injectTo: 'head' },
      ];
    },
  };
}

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', 'storybook-addon-pseudo-states'],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  async viteFinal(viteConfig) {
    // Import dinâmico: carregar o plugin já carrega o módulo nativo do Tailwind.
    const tailwind = browserMode ? tailwindBrowser() : (await import('@tailwindcss/vite')).default();
    viteConfig.plugins = [...(viteConfig.plugins ?? []), tailwind];
    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: {
        ...(viteConfig.resolve?.alias as Record<string, string>),
        '@': path.resolve(here, '../../src'),
        // O design system (em ../../src) não tem node_modules próprio: resolve as dependências daqui.
        clsx: path.resolve(here, '../node_modules/clsx'),
        '@phosphor-icons/react': path.resolve(here, '../node_modules/@phosphor-icons/react'),
        // CSS do Tailwind: processado pelo plugin (CI) ou vazio quando o Tailwind roda no navegador.
        'kds-tailwind.css': path.resolve(here, browserMode ? 'empty.css' : 'tailwind.css'),
      },
      // Uma só cópia do React, mesmo com o design system importado de ../../src.
      dedupe: ['react', 'react-dom'],
    };
    viteConfig.server = { ...viteConfig.server, fs: { ...viteConfig.server?.fs, allow: [path.resolve(here, '../..')] } };
    return viteConfig;
  },
};

export default config;
