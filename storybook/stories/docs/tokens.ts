import themeCss from '../../../src/design-system/kayene/styles/theme.css?raw';

/** Lê os tokens direto do theme.css do Kayene, para a documentação nunca divergir do código. */

function block(selector: string): string {
  const start = themeCss.indexOf(selector);
  const open = themeCss.indexOf('{', start);
  let depth = 0;
  for (let i = open; i < themeCss.length; i += 1) {
    if (themeCss[i] === '{') depth += 1;
    if (themeCss[i] === '}') {
      depth -= 1;
      if (depth === 0) return themeCss.slice(open + 1, i);
    }
  }
  return '';
}

function vars(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const match of body.matchAll(/(--[\w-]+):\s*([^;]+);/g)) out[match[1]] = match[2].trim();
  return out;
}

const light = vars(block(':root'));
const dark = { ...light, ...vars(block('\n.dark {')) };

const resolve = (value: string, scope: Record<string, string>, depth = 0): string => {
  const ref = /^var\((--[\w-]+)\)$/.exec(value);
  if (!ref || depth > 5) return value;
  return resolve(scope[ref[1]] ?? value, scope, depth + 1);
};

export interface Swatch {
  step: string;
  css: string;
  hex: string;
}
export interface Family {
  name: string;
  swatches: Swatch[];
}

export function families(): Family[] {
  const map = new Map<string, Swatch[]>();
  for (const [css, hex] of Object.entries(light)) {
    const match = /^--kayene-([a-z]+)-(\d+)$/.exec(css);
    if (!match || !hex.startsWith('#')) continue;
    map.set(match[1], [...(map.get(match[1]) ?? []), { step: match[2], css, hex }]);
  }
  return [...map].map(([name, swatches]) => ({ name, swatches }));
}

export interface SemanticToken {
  name: string;
  css: string;
  /** Primitivo de origem, por exemplo `cornflower-700`. */
  source: string;
  light: string;
  dark: string;
}

const semanticGroups: Array<[string, string[]]> = [
  ['Base', ['bg', 'surface', 'content', 'content-muted', 'border', 'ring']],
  ['Primária', ['primary', 'primary-hover', 'primary-active', 'primary-soft', 'primary-border', 'primary-foreground']],
  ['Apoio', ['secondary', 'secondary-hover', 'secondary-soft', 'tertiary', 'accent', 'expressive']],
  ['Feedback', ['error', 'error-soft', 'error-stroke', 'success', 'success-soft', 'info', 'info-soft', 'alert', 'alert-soft']],
];

export function semanticGroupsResolved(): Array<{ title: string; tokens: SemanticToken[] }> {
  return semanticGroups.map(([title, names]) => ({
    title,
    tokens: names
      .filter((name) => light[`--kayene-${name}`] !== undefined)
      .map((name) => {
        const css = `--kayene-${name}`;
        const raw = light[css];
        const ref = /^var\(--kayene-([\w-]+)\)$/.exec(raw);
        return {
          name,
          css,
          source: ref ? ref[1] : raw,
          light: resolve(raw, light),
          dark: resolve(dark[css] ?? raw, dark),
        };
      }),
  }));
}

export function radii(): Array<{ name: string; css: string; value: string }> {
  return Object.entries(light)
    .filter(([css]) => css.startsWith('--kayene-radius-'))
    .map(([css, value]) => ({ name: css.replace('--kayene-radius-', ''), css, value }));
}

export function shadows(): Array<{ name: string; css: string }> {
  return Object.keys(light)
    .filter((css) => css.startsWith('--kayene-shadow-'))
    .map((css) => ({ name: css.replace('--kayene-shadow-', ''), css }));
}

export interface TextUtility {
  name: string;
  spec: string;
  display: boolean;
}

export function textUtilities(): TextUtility[] {
  const out: TextUtility[] = [];
  for (const match of themeCss.matchAll(/@utility (text-[\w-]+)\s*\{([^}]*)\}/g)) {
    const body = match[2];
    const size = /font-size:\s*([^;]+);/.exec(body)?.[1].trim() ?? '';
    const lh = /line-height:\s*([^;]+);/.exec(body)?.[1].trim() ?? '';
    const weight = /font-weight:\s*(\d+)/.exec(body)?.[1] ?? '400';
    const px = (rem: string) => `${Math.round(parseFloat(rem) * 16)}px`;
    out.push({
      name: match[1],
      spec: `${size.endsWith('rem') ? px(size) : size} / ${lh.endsWith('rem') ? px(lh) : lh} · peso ${weight}`,
      display: /font-family:\s*var\(--font-display\)/.test(body),
    });
  }
  return out;
}

export function tokenCounts() {
  return {
    primitives: families().reduce((total, family) => total + family.swatches.length, 0),
    semantic: semanticGroupsResolved().reduce((total, group) => total + group.tokens.length, 0),
    families: families().length,
    text: textUtilities().length,
  };
}
