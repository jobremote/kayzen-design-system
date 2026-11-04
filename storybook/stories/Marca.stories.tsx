import type { Meta, StoryObj } from '@storybook/react-vite';
import { KayeneLogo, KayeneMark } from '@/design-system/kayene';
import { Cell, Section } from './layout';

const meta = {
  title: 'Componentes/Marca/Símbolo e logotipo',
  component: KayeneMark,
} satisfies Meta<typeof KayeneMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Os arquivos oficiais não podem ser recoloridos, achatados nem redesenhados. */
export const TodosOsEstados: Story = {
  render: () => (
    <>
      <Section title="Símbolo">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Cell key={size} label={size}><KayeneMark size={size} /></Cell>
        ))}
      </Section>
      <Section title="Logotipo">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Cell key={size} label={size}><KayeneLogo size={size} /></Cell>
        ))}
      </Section>
    </>
  ),
};
