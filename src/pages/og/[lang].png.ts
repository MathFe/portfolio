// Gera a imagem de prévia (Open Graph) usada ao compartilhar o link no LinkedIn, WhatsApp etc.
// Uma imagem por idioma, criada no build a partir de src/data/site.ts: /og/pt.png e /og/en.png

import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../../data/site';
import { languages, useTranslations, type Lang } from '../../i18n/ui';

export const WIDTH = 1200;
export const HEIGHT = 630;

// Tecnologias em destaque na imagem
const highlights = ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'React'];

const colors = {
  bg: '#0b0d10',
  soft: '#12151a',
  border: '#1f242c',
  text: '#e6e8eb',
  muted: '#8b949e',
  accent: '#5eead4',
};

const font = (pkg: string, file: string) =>
  fs.readFileSync(path.resolve('node_modules/@fontsource', pkg, 'files', file));

const fonts = [
  { name: 'Inter', data: font('inter', 'inter-latin-400-normal.woff'), weight: 400 as const },
  { name: 'Inter', data: font('inter', 'inter-latin-600-normal.woff'), weight: 600 as const },
  { name: 'Inter', data: font('inter', 'inter-latin-700-normal.woff'), weight: 700 as const },
  { name: 'Mono', data: font('jetbrains-mono', 'jetbrains-mono-latin-500-normal.woff'), weight: 500 as const },
];

// Helper mínimo para montar a árvore de elementos que o satori entende
type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: (Node | string)[]): Node => ({
  type,
  props: { style, children: children.length === 1 ? children[0] : children },
});

function render(lang: Lang): Node {
  const t = useTranslations(lang);
  const initials = site.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return h(
    'div',
    {
      width: WIDTH,
      height: HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      background: colors.bg,
      backgroundImage: `radial-gradient(circle at 100% 0%, rgba(94, 234, 212, 0.14), transparent 45%)`,
      color: colors.text,
      fontFamily: 'Inter',
      borderTop: `8px solid ${colors.accent}`,
    },
    // Topo: logo e domínio
    h(
      'div',
      { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
      h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 32 }, initials, h('span', { color: colors.accent }, '.')),
      h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 26, color: colors.muted }, new URL(site.url).host),
    ),
    // Meio: nome, cargo e frase
    h(
      'div',
      { display: 'flex', flexDirection: 'column' },
      h('div', { fontFamily: 'Mono', fontSize: 28, color: colors.accent }, t('hero.hello')),
      h('div', { fontSize: 92, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05, marginTop: 8 }, site.name),
      h(
        'div',
        { fontSize: 30, color: colors.muted, marginTop: 12 },
        `${site.role[lang]} · ${site.location[lang]}`,
      ),
      h(
        'div',
        { fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 32, maxWidth: 900, lineHeight: 1.3 },
        site.headline[lang],
      ),
    ),
    // Base: tecnologias
    h(
      'div',
      { display: 'flex', gap: 12 },
      ...highlights.map((tech) =>
        h(
          'div',
          {
            fontFamily: 'Mono',
            fontSize: 22,
            padding: '8px 18px',
            borderRadius: 999,
            border: `1px solid ${colors.border}`,
            background: colors.soft,
            color: colors.accent,
          },
          tech,
        ),
      ),
    ),
  );
}

export const getStaticPaths: GetStaticPaths = () =>
  (Object.keys(languages) as Lang[]).map((lang) => ({ params: { lang } }));

export const GET: APIRoute = async ({ params }) => {
  const svg = await satori(render(params.lang as Lang) as never, { width: WIDTH, height: HEIGHT, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
