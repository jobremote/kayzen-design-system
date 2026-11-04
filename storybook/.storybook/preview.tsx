import type { Decorator, Preview } from '@storybook/react-vite';
import '@fontsource/albert-sans/400.css';
import '@fontsource/albert-sans/500.css';
import '@fontsource/albert-sans/600.css';
import '@fontsource/lora/500.css';
import 'kds-tailwind.css';
import theme from './theme';

const withTheme: Decorator = (Story, context) => {
  document.documentElement.classList.toggle('dark', context.globals.theme === 'dark');
  return (
    <div className="bg-background p-8 text-content" style={{ minHeight: '100vh', boxSizing: 'border-box' }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Tema do Kayene',
      toolbar: {
        title: 'Tema',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Claro' },
          { value: 'dark', title: 'Escuro' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    controls: { expanded: true },
    docs: { theme },
    options: {
      storySort: {
        order: [
          'Introdução',
          'Fundamentos',
          ['Cor', 'Tipografia', 'Forma e elevação', 'Marca'],
          'Componentes',
          ['Ações', 'Formulários', 'Feedback', 'Navegação', 'Padrões', 'Marca'],
        ],
      },
    },
  },
};

export default preview;
