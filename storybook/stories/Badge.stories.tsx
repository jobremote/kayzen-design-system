import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@/design-system/kayene';
import { Cell, Section } from './layout';

const meta = {
  title: 'Componentes/Ações/Badge',
  component: Badge,
  args: { children: 'Badge' },
  argTypes: {
    status: { control: 'select', options: ['neutral', 'info', 'success', 'alert', 'error'] },
    variant: { control: 'inline-radio', options: ['filled', 'outline'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const TodosOsEstados: Story = {
  render: () => (
    <>
      {(['filled', 'outline'] as const).map((variant) => (
        <Section key={variant} title={variant === 'filled' ? 'Preenchido' : 'Contorno'}>
          {(['neutral', 'info', 'success', 'alert', 'error'] as const).map((status) => (
            <Cell key={status} label={status}>
              <Badge status={status} variant={variant}>Badge</Badge>
            </Cell>
          ))}
        </Section>
      ))}
    </>
  ),
};
