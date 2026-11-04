import type { ReactNode } from 'react';
import { KayeneLogo, KayeneMark } from '@/design-system/kayene';
import { families, radii, semanticGroupsResolved, shadows, textUtilities, tokenCounts } from './tokens';

/** Blocos das páginas de documentação. Usam as classes do próprio Kayene. */

export const Doc = ({ children }: { children: ReactNode }) => (
  <div className="kds-doc mx-auto max-w-5xl bg-background p-2 font-sans text-content md:p-6">{children}</div>
);

export const H1 = ({ children }: { children: ReactNode }) => <h1 className="mb-4 font-display text-4xl text-content md:text-5xl">{children}</h1>;
export const H2 = ({ children }: { children: ReactNode }) => <h2 className="mb-4 mt-14 border-t border-border pt-8 text-title-sm">{children}</h2>;
export const P = ({ children }: { children: ReactNode }) => <div className="mb-4 max-w-3xl text-paragraph-sm leading-6 text-content-muted">{children}</div>;
export const Code = ({ children }: { children: string }) => (
  <pre className="my-4 overflow-x-auto rounded-card bg-surface p-5 text-sm leading-6 shadow-inset"><code>{children.trim()}</code></pre>
);

export function Hero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <header className="relative overflow-hidden rounded-surface bg-primary px-8 py-14 text-primary-foreground md:px-14 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, var(--kayene-sunflower-300), transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-24 size-80 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, var(--kayene-lotus-400), transparent 65%)' }}
      />
      <p className="relative mb-4 text-label-sm uppercase tracking-widest opacity-80">{eyebrow}</p>
      <h1 className="relative max-w-3xl font-display text-5xl leading-tight md:text-6xl">{title}</h1>
      <p className="relative mt-6 max-w-2xl text-paragraph-md opacity-90">{children}</p>
    </header>
  );
}

export function Stats() {
  const c = tokenCounts();
  const items: Array<[string, string]> = [
    [String(c.primitives), 'tokens primitivos'],
    [String(c.families), 'famílias de cor'],
    [String(c.semantic), 'tokens semânticos'],
    ['2', 'temas: claro e escuro'],
  ];
  return (
    <dl className="mb-4 mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map(([value, label]) => (
        <div key={label} className="flex flex-col rounded-card bg-surface p-5 shadow-raised">
          <dt className="order-2 mt-1 text-label-sm text-content-muted">{label}</dt>
          <dd className="font-display text-4xl text-primary">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Principles({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <ul className="my-6 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="rounded-card bg-surface p-6 shadow-raised">
          <h3 className="mb-2 text-paragraph-sm font-semibold text-secondary">{item.title}</h3>
          <p className="text-sm text-content-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Hierarchy() {
  const steps: Array<[string, string, string]> = [
    ['1', 'Primitivos', 'As paletas brutas: --kayene-cornflower-700, --kayene-stone-25…'],
    ['2', 'Semânticos', 'Aliases com papel: --kayene-primary, --kayene-surface, --kayene-error…'],
    ['3', 'Componentes', 'Só consomem semânticos: bg-primary, text-content, border-primary-border.'],
  ];
  return (
    <ol className="my-6 grid gap-4 md:grid-cols-3">
      {steps.map(([n, title, text]) => (
        <li key={n} className="rounded-card border border-border p-6">
          <span className="mb-3 grid size-8 place-items-center rounded-pill bg-primary-soft text-sm font-semibold text-primary">{n}</span>
          <h3 className="mb-1 font-semibold">{title}</h3>
          <p className="text-sm text-content-muted">{text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Palettes() {
  return (
    <div className="grid gap-8">
      {families().map((family) => (
        <section key={family.name}>
          <h3 className="mb-3 text-label-sm uppercase tracking-wide text-content-muted">{family.name}</h3>
          <div className="grid grid-cols-5 gap-2 md:grid-cols-9 lg:grid-cols-13" style={{ gridTemplateColumns: `repeat(${family.swatches.length}, minmax(0, 1fr))` }}>
            {family.swatches.map((swatch) => (
              <div key={swatch.css} className="min-w-0">
                <div className="h-16 rounded-control border border-border" style={{ background: swatch.hex }} />
                <p className="mt-1 text-label-sm font-medium">{swatch.step}</p>
                <p className="truncate text-label-sm text-content-muted">{swatch.hex}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const Chip = ({ hex }: { hex: string }) => (
  <span className="flex items-center gap-3 text-sm tabular-nums text-content-muted">
    <span className="size-9 shrink-0 rounded-control border border-border" style={{ background: hex }} />
    {hex}
  </span>
);

export function SemanticTokens() {
  return (
    <div className="grid gap-8">
      {semanticGroupsResolved().map((group) => (
        <section key={group.title}>
          <h3 className="mb-3 text-label-sm uppercase tracking-wide text-content-muted">{group.title}</h3>
          <div className="grid grid-cols-[minmax(160px,1.4fr)_1fr_1fr] gap-x-4 border-b border-border pb-2 text-label-sm uppercase tracking-wide text-content-muted">
            <span>Token</span>
            <span>Claro</span>
            <span>Escuro</span>
          </div>
          {group.tokens.map((token) => (
            <div key={token.css} className="grid grid-cols-[minmax(160px,1.4fr)_1fr_1fr] items-center gap-x-4 border-b border-border py-2">
              <div>
                <code className="block text-sm font-medium" style={{ fontFamily: 'inherit' }}>{token.css}</code>
                <small className="text-label-sm text-content-muted">{token.source}</small>
              </div>
              <Chip hex={token.light} />
              <Chip hex={token.dark} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export function TypeSpecimens() {
  return (
    <div className="grid gap-1">
      {textUtilities().map((style) => (
        <div key={style.name} className="grid items-baseline gap-2 border-b border-border py-5 md:grid-cols-[220px_1fr] md:gap-8">
          <div>
            <code className="block text-sm font-medium" style={{ fontFamily: 'inherit' }}>{style.name}</code>
            <small className="text-label-sm text-content-muted">{style.spec}{style.display ? ' · Lora' : ' · Albert Sans'}</small>
          </div>
          <p className={style.name}>Cuidar com calma, no seu tempo</p>
        </div>
      ))}
    </div>
  );
}

export function FontPair() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-card bg-surface p-8 shadow-raised">
        <p className="text-label-sm uppercase tracking-wide text-content-muted">Display · só para momentos expressivos</p>
        <p className="mt-3 font-display text-6xl">Lora</p>
        <p className="mt-3 font-display text-xl text-content-muted">Aa Bb Cc 0123456789</p>
      </div>
      <div className="rounded-card bg-surface p-8 shadow-raised">
        <p className="text-label-sm uppercase tracking-wide text-content-muted">Interface · controles, textos, títulos</p>
        <p className="mt-3 text-6xl font-semibold">Albert Sans</p>
        <p className="mt-3 text-xl text-content-muted">Aa Bb Cc 0123456789</p>
      </div>
    </div>
  );
}

export function Shapes() {
  const guide: Record<string, string> = {
    control: 'Campos de formulário',
    card: 'Cartões e listas',
    surface: 'Superfícies amplas, modais',
    pill: 'Botões, chips e elementos pequenos interativos',
  };
  return (
    <div className="my-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {radii().map((radius) => (
        <figure key={radius.css} className="m-0">
          <div className="grid h-28 place-items-center border-2 border-primary bg-primary-soft" style={{ borderRadius: `var(${radius.css})` }} />
          <figcaption className="mt-3">
            <code className="block text-sm font-medium" style={{ fontFamily: 'inherit' }}>radius-{radius.name}</code>
            <small className="text-label-sm text-content-muted">{radius.value} · {guide[radius.name] ?? ''}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Elevations() {
  const labels: Record<string, string> = { raised: 'Em relevo: cartões, listas, modais', inset: 'Rebaixado: campos de formulário' };
  return (
    <div className="my-6 grid gap-6 md:grid-cols-2">
      {shadows().map((shadow) => (
        <figure key={shadow.css} className="m-0">
          <div className="grid h-36 place-items-center rounded-card bg-surface" style={{ boxShadow: `var(${shadow.css})` }}>
            <span className="text-sm text-content-muted">{shadow.name}</span>
          </div>
          <figcaption className="mt-3">
            <code className="block text-sm font-medium" style={{ fontFamily: 'inherit' }}>shadow-{shadow.name}</code>
            <small className="text-label-sm text-content-muted">{labels[shadow.name] ?? ''}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function BrandAssets() {
  return (
    <div className="my-6 grid gap-6 md:grid-cols-2">
      <div className="grid place-items-center rounded-card bg-surface p-10 shadow-raised">
        <KayeneMark size="lg" />
        <p className="mt-4 text-label-sm text-content-muted">Símbolo bicolor</p>
      </div>
      <div className="grid place-items-center rounded-card bg-surface p-10 shadow-raised">
        <KayeneLogo size="md" />
        <p className="mt-4 text-label-sm text-content-muted">Logotipo (lockup)</p>
      </div>
    </div>
  );
}
