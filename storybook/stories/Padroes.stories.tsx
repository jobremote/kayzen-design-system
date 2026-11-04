import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { BellIcon, CalendarIcon, ChatCircleIcon, HouseIcon, UserIcon } from '@phosphor-icons/react';
import {
  AppHeader,
  Banner,
  BottomNavBar,
  Button,
  Calendar,
  CalendarDayCell,
  LoginTemplate,
  Modal,
  ProfessionalCard,
  ServiceListItem,
  Skeleton,
  TabItem,
  TimeSlotChip,
} from '@/design-system/kayene';
import { Cell, Section } from './layout';

const meta = {
  title: 'Componentes/Padrões/Padrões de interface',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const icon = 'size-5';

export const Lista: Story = {
  name: 'Itens de lista e horários',
  render: () => (
    <>
      <Section title="Item de serviço e cartão de profissional">
        <Cell label="ServiceListItem" className="w-96"><ServiceListItem title="Consulta inicial" subtitle="50 minutos · online" /></Cell>
        <Cell label="ProfessionalCard" className="w-96"><ProfessionalCard title="Pessoa Exemplo" subtitle="Atendimento · segunda a sexta" /></Cell>
      </Section>
      <Section title="Horários">
        <Cell label="Disponível"><TimeSlotChip>09:00</TimeSlotChip></Cell>
        <Cell label="Selecionado"><TimeSlotChip state="selected">10:30</TimeSlotChip></Cell>
        <Cell label="Indisponível"><TimeSlotChip state="unavailable">14:00</TimeSlotChip></Cell>
      </Section>
    </>
  ),
};

export const Calendario: Story = {
  name: 'Calendário',
  render: () => (
    <>
      <Section title="Dias">
        <Cell label="Padrão"><CalendarDayCell>12</CalendarDayCell></Cell>
        <Cell label="Hoje"><CalendarDayCell state="today">23</CalendarDayCell></Cell>
        <Cell label="Selecionado"><CalendarDayCell state="selected">25</CalendarDayCell></Cell>
        <Cell label="Desabilitado"><CalendarDayCell state="disabled">3</CalendarDayCell></Cell>
      </Section>
      <Section title="Calendário"><Calendar /></Section>
    </>
  ),
};

export const Avisos: Story = {
  name: 'Avisos e carregamento',
  render: () => (
    <>
      <Section title="Banner">
        {(['info', 'success', 'alert', 'error', 'neutral'] as const).map((status) => (
          <Cell key={status} label={status} className="w-96"><Banner status={status} title="Título do aviso">Texto de apoio com mais detalhes.</Banner></Cell>
        ))}
        <Cell label="Dispensável" className="w-96"><Banner title="Você pode fechar este aviso" dismissible>Clique no X.</Banner></Cell>
      </Section>
      <Section title="Skeleton">
        <Cell label="Título" className="w-80"><Skeleton variant="heading" /></Cell>
        <Cell label="Linha" className="w-80"><Skeleton variant="line" /></Cell>
        <Cell label="Retângulo" className="w-80"><Skeleton variant="rectangle" /></Cell>
        <Cell label="Quadrado"><Skeleton variant="square" /></Cell>
      </Section>
    </>
  ),
};

function ModalDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="grid gap-4">
      <Button variant="secondary" onClick={() => setOpen(true)} className="w-fit">Abrir</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Confirmar agendamento" className="max-w-md">
        Revise os dados antes de continuar.
      </Modal>
    </div>
  );
}

export const Janela: Story = {
  name: 'Modal',
  render: () => <ModalDemo />,
};

export const Navegacao: Story = {
  name: 'Cabeçalho e navegação',
  render: () => (
    <>
      <Section title="Cabeçalho do app">
        <Cell label="Início" className="w-96"><AppHeader /></Cell>
        <Cell label="Com voltar" className="w-96"><AppHeader variant="back" title="Agendamento" /></Cell>
      </Section>
      <Section title="Navegação inferior">
        <Cell label="BottomNavBar + TabItem" className="w-96">
          <BottomNavBar>
            <TabItem active icon={<HouseIcon aria-hidden="true" className={icon} />} label="Início" />
            <TabItem icon={<CalendarIcon aria-hidden="true" className={icon} />} label="Agenda" />
            <TabItem icon={<ChatCircleIcon aria-hidden="true" className={icon} />} label="Conversas" />
            <TabItem icon={<BellIcon aria-hidden="true" className={icon} />} label="Avisos" />
            <TabItem icon={<UserIcon aria-hidden="true" className={icon} />} label="Perfil" />
          </BottomNavBar>
        </Cell>
      </Section>
    </>
  ),
};

export const Login: Story = {
  name: 'Modelo de login',
  render: () => <div className="max-w-sm"><LoginTemplate /></div>,
};
