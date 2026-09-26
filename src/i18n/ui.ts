export const languages = { pt: 'Português', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

/** Texto traduzido: um valor para cada idioma. */
export type Localized = Record<Lang, string>;

export const ui = {
  pt: {
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'id.about': 'sobre',
    'id.projects': 'projetos',
    'id.experience': 'experiencia',
    'id.contact': 'contato',
    'nav.home': 'Início',
    'nav.main': 'Principal',
    'theme.toggle': 'Alternar tema claro/escuro',
    'lang.switch': 'Read in English',
    'hero.available': 'Disponível para novas oportunidades',
    'hero.hello': 'Olá, eu sou',
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact': 'Entrar em contato',
    'hero.cta.resume': 'Currículo',
    'about.title': 'Sobre mim',
    'about.education': 'Formação',
    'projects.title': 'Projetos',
    'projects.featured': 'Destaque',
    'projects.code': 'Código de',
    'projects.demo': 'Demo de',
    'experience.title': 'Experiência',
    'contact.title': 'Contato',
    'contact.heading': 'Vamos conversar?',
    'contact.text':
      'Estou aberto a novas oportunidades, freelas e colaborações. Minha caixa de entrada está sempre aberta.',
    'footer.made': 'Feito com Astro.',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'id.about': 'about',
    'id.projects': 'projects',
    'id.experience': 'experience',
    'id.contact': 'contact',
    'nav.home': 'Home',
    'nav.main': 'Main',
    'theme.toggle': 'Toggle light/dark theme',
    'lang.switch': 'Ler em português',
    'hero.available': 'Open to new opportunities',
    'hero.hello': "Hi, I'm",
    'hero.cta.projects': 'See projects',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.resume': 'Resume',
    'about.title': 'About me',
    'about.education': 'Education',
    'projects.title': 'Projects',
    'projects.featured': 'Featured',
    'projects.code': 'Source code for',
    'projects.demo': 'Demo of',
    'experience.title': 'Experience',
    'contact.title': 'Contact',
    'contact.heading': "Let's talk?",
    'contact.text':
      "I'm open to new opportunities, freelance work and collaborations. My inbox is always open.",
    'footer.made': 'Built with Astro.',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key];
}

/** Caminho da home em cada idioma: "/" para português e "/en/" para inglês. */
export function homePath(lang: Lang) {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
