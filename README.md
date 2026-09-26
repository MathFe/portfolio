# mathfe.dev

Portfolio pessoal de Matheus Ferreira, feito com [Astro](https://astro.build).

## Rodando localmente

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site estático em ./dist
npm run preview  # serve o build localmente
```

## Editando o conteúdo

Todo o conteúdo (textos, tecnologias, projetos, experiência e links) fica em `src/data/site.ts`.
O site é bilíngue: português em `/` e inglês em `/en/`. Textos com `{ pt, en }` têm uma versão por idioma, e os textos fixos da interface (menu, botões, títulos) ficam em `src/i18n/ui.ts`.
O currículo em PDF fica em `public/matheus-ferreira-curriculo.pdf`.

## Estrutura

```
src/
├── components/   # seções da página (Header, Hero, About, Projects, Experience, Contact) e Portfolio.astro, que as junta
├── data/site.ts  # conteúdo do site
├── layouts/      # HTML base, SEO e fontes
├── i18n/ui.ts    # textos da interface em PT e EN
├── pages/        # rotas: / (PT) e /en/ (EN)
└── styles/       # CSS global e tema claro/escuro
```

## Deploy

Hospedado na Vercel com deploy automático a cada push na branch `main`.
