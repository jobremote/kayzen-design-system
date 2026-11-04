# Catálogo (Storybook) do Kayene

Storybook isolado do app: tem as próprias dependências (`storybook/package.json`) e importa o design system direto de `../src`. Não altera o app nem o que é publicado como design system (`.dsignore`).

```sh
cd storybook
npm install
npm run dev     # http://localhost:6007
npm run build   # gera storybook-static/
```

- **Introdução e Fundamentos** (cor, tipografia, forma e elevação, marca) leem os tokens de `src/design-system/kayene/styles/theme.css`; não repita valores à mão.
- **Componentes**: uma história por grupo, com todos os estados (hover e foco pelo addon de pseudo-estados).
- O tema claro/escuro se alterna na barra de ferramentas (classe `.dark`).

## Windows com Controle de Aplicativo

O Tailwind v4 usa um módulo nativo (`@tailwindcss/oxide`). Se o Windows bloquear esse arquivo (política de Controle de Aplicativo / Smart App Control), o Storybook trava ao iniciar. Para desenvolver nessa máquina, use o Tailwind que compila no navegador:

```sh
# PowerShell
$env:KDS_TAILWIND_BROWSER = "1"; npm run dev
```

O build oficial (CI, Linux) usa o plugin normal do Vite. A cada push na `main`, a workflow `storybook.yml` publica o catálogo no GitHub Pages.
