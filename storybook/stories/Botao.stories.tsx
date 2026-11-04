import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRightIcon, PlusIcon } from '@phosphor-icons/react';
import { Button, CTA } from '@/design-system/kayene';
import { Cell, Section } from './layout';

const meta = {
  title: 'Componentes/Ações/Botão',
  component: Button,
  args: { children: 'Agendar' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const variants = [
  ['primary', 'Primário'],
  ['secondary', 'Secundário'],
  ['tertiary', 'Terciário'],
] as const;
const sizes = [
  ['sm', 'Pequeno'],
  ['md', 'Médio'],
  ['lg', 'Grande'],
] as const;

/** Variantes × tamanhos × estados (padrão, hover, foco, carregando, desabilitado). */
export const TodosOsEstados: Story = {
  parameters: { pseudo: { hover: ['.sb-hover button'], focusVisible: ['.sb-focus button'] } },
  render: () => (
    <>
      {variants.map(([variant, name]) =>
        sizes.map(([size, sizeName]) => (
          <Section key={`${variant}-${size}`} title={`${name} · ${sizeName}`}>
            <Cell label="Padrão"><Button variant={variant} size={size}>Agendar</Button></Cell>
            <Cell label="Hover" hover><Button variant={variant} size={size}>Agendar</Button></Cell>
            <Cell label="Foco" focus><Button variant={variant} size={size}>Agendar</Button></Cell>
            <Cell label="Carregando"><Button variant={variant} size={size} loading>Agendar</Button></Cell>
            <Cell label="Desabilitado"><Button variant={variant} size={size} disabled>Agendar</Button></Cell>
          </Section>
        )),
      )}
      <Section title="Com ícones">
        <Cell label="Ícone à esquerda"><Button leadingIcon={<PlusIcon aria-hidden="true" className="size-4" />}>Novo</Button></Cell>
        <Cell label="Ícone à direita"><Button trailingIcon={<ArrowRightIcon aria-hidden="true" className="size-4" />}>Continuar</Button></Cell>
      </Section>
    </>
  ),
};

export const ChamadaParaAcao: Story = {
  name: 'CTA',
  parameters: { pseudo: { hover: ['.sb-hover button'], focusVisible: ['.sb-focus button'] } },
  render: () => (
    <>
      <Section title="CTA (botão de chamada principal)">
        <Cell label="Padrão"><CTA>Entrar</CTA></Cell>
        <Cell label="Hover" hover><CTA>Entrar</CTA></Cell>
        <Cell label="Foco" focus><CTA>Entrar</CTA></Cell>
        <Cell label="Desabilitado"><CTA disabled>Entrar</CTA></Cell>
      </Section>
    </>
  ),
};
