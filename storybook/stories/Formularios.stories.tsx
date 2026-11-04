import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput, EmailInput, FormGroup, PasswordInput, RadioButton, SearchInput, TextInput, Textarea } from '@/design-system/kayene';
import { Cell, Section } from './layout';

const meta = {
  title: 'Componentes/Formulários/Campo de texto',
  component: TextInput,
  args: { label: 'Nome completo', placeholder: 'Como você prefere ser chamada(o)', name: 'nome' },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <TextInput {...args} />
    </div>
  ),
};

const w = 'w-72';

/** Campo de texto, e-mail, senha, busca, data e texto longo em todos os estados. */
export const TodosOsEstados: Story = {
  parameters: { pseudo: { hover: ['.sb-hover input', '.sb-hover textarea'], focus: ['.sb-focus input', '.sb-focus textarea'] } },
  render: () => (
    <>
      <Section title="Campo de texto">
        <Cell label="Padrão" className={w}><TextInput label="Nome completo" name="a" placeholder="Digite aqui" /></Cell>
        <Cell label="Foco" focus className={w}><TextInput label="Nome completo" name="b" placeholder="Digite aqui" /></Cell>
        <Cell label="Com dica" className={w}><TextInput label="Nome completo" name="c" placeholder="Digite aqui" hint="Use o nome que aparece no documento." /></Cell>
        <Cell label="Erro" className={w}><TextInput label="Nome completo" name="d" placeholder="Digite aqui" error="Campo obrigatório." /></Cell>
        <Cell label="Desabilitado" className={w}><TextInput label="Nome completo" name="e" placeholder="Digite aqui" disabled /></Cell>
        <Cell label="Preenchido" className={w}><TextInput label="Nome completo" name="f" defaultValue="Pessoa Exemplo" /></Cell>
      </Section>
      <Section title="E-mail e senha">
        <Cell label="E-mail" className={w}><EmailInput label="E-mail" name="mail" placeholder="voce@exemplo.com" /></Cell>
        <Cell label="E-mail com erro" className={w}><EmailInput label="E-mail" name="mail2" defaultValue="voce@" error="Informe um e-mail válido." /></Cell>
        <Cell label="Senha (use o olho para mostrar)" className={w}><PasswordInput label="Senha" name="senha" placeholder="Sua senha" /></Cell>
      </Section>
      <Section title="Busca e data">
        <Cell label="Busca" className={w}><SearchInput placeholder="Buscar profissionais" /></Cell>
        <Cell label="Data" className={w}><DateInput label="Data" name="data" /></Cell>
      </Section>
      <Section title="Texto longo">
        <Cell label="Padrão" className={w}><Textarea label="Observações" name="obs" placeholder="Conte o que for importante" /></Cell>
        <Cell label="Erro" className={w}><Textarea label="Observações" name="obs2" error="Campo obrigatório." /></Cell>
        <Cell label="Desabilitado" className={w}><Textarea label="Observações" name="obs3" disabled /></Cell>
      </Section>
      <Section title="Escolha única">
        <Cell label="Grupo">
          <FormGroup legend="Como prefere ser lembrada(o)?">
            <RadioButton name="lembrete" label="E-mail" defaultChecked />
            <RadioButton name="lembrete" label="Mensagem" />
            <RadioButton name="lembrete" label="Sem lembretes" disabled />
          </FormGroup>
        </Cell>
      </Section>
    </>
  ),
};
