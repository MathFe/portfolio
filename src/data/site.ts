// Todo o conteúdo do portfolio fica aqui. Edite este arquivo para atualizar o site.
// Textos com { pt, en } têm uma versão para cada idioma.
// Os textos fixos da interface (menu, botões, títulos) ficam em src/i18n/ui.ts.

import type { Localized } from '../i18n/ui';

export const site = {
  name: 'Matheus Ferreira',
  role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' } as Localized,
  location: { pt: 'São José dos Campos, SP', en: 'São José dos Campos, Brazil' } as Localized,
  url: 'https://mathfe.dev',
  description: {
    pt: 'Matheus Ferreira, desenvolvedor full stack com foco em Java e Spring Boot. APIs REST, automação industrial, projetos e contato.',
    en: 'Matheus Ferreira, full stack developer focused on Java and Spring Boot. REST APIs, industrial automation, projects and contact.',
  } as Localized,
  headline: {
    pt: 'Construo APIs robustas e software que conecta o código ao chão de fábrica.',
    en: 'I build robust APIs and software that connects code to the factory floor.',
  } as Localized,
  intro: {
    pt: 'Desenvolvedor Full Stack com cerca de 2 anos de experiência profissional na General Motors, criando soluções de automação e integração para processos industriais. Trabalho com Java 21, Spring Boot, PostgreSQL e Docker.',
    en: 'Full Stack Developer with about 2 years of professional experience at General Motors, building automation and integration solutions for industrial processes. I work with Java 21, Spring Boot, PostgreSQL and Docker.',
  } as Localized,
  available: true,
};

export const links = {
  email: 'matheusferreirasjc@gmail.com',
  github: 'https://github.com/MathFe',
  linkedin: 'https://www.linkedin.com/in/matheus-ferreira-044352165/',
  // Para ter um currículo em inglês, coloque o PDF em /public e troque o caminho em "en".
  resume: {
    pt: '/matheus-ferreira-curriculo.pdf',
    en: '/matheus-ferreira-curriculo.pdf',
  } as Localized,
};

export const about: Localized[] = [
  {
    pt: 'Atuo na General Motors em São José dos Campos, desenvolvendo soluções de automação e integração para mais de 250 processos industriais. Uso Java em sistemas de supervisão, monitoramento e análise de dados de linhas de produção.',
    en: 'I work at General Motors in São José dos Campos, Brazil, building automation and integration solutions for more than 250 industrial processes. I use Java in supervision, monitoring and data analysis systems for production lines.',
  },
  {
    pt: 'No desenvolvimento, meu foco é o back-end: construo APIs REST com Java 21, Spring Boot, Spring Security, JPA/Hibernate e PostgreSQL, com ambiente em Docker e migrações com Flyway. No front-end, trabalho com React e JavaScript.',
    en: 'My main focus is the back end: I build REST APIs with Java 21, Spring Boot, Spring Security, JPA/Hibernate and PostgreSQL, running on Docker with Flyway migrations. On the front end, I work with React and JavaScript.',
  },
  {
    pt: 'Sou tecnólogo em Desenvolvimento Back-end, pós-graduado em Inteligência Artificial e Machine Learning, e atualmente curso Ciência da Computação na UNIP.',
    en: "I hold an associate degree in Back-end Development and a postgraduate degree in Artificial Intelligence and Machine Learning, and I'm currently pursuing a bachelor's in Computer Science at UNIP.",
  },
];

export const skills: { group: Localized; items: string[] }[] = [
  { group: { pt: 'Linguagens', en: 'Languages' }, items: ['Java', 'Python', 'JavaScript', 'PHP', 'SQL'] },
  {
    group: { pt: 'Back-end', en: 'Back end' },
    items: ['Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'Hibernate', 'API REST', 'MapStruct', 'Django'],
  },
  { group: { pt: 'Banco de dados', en: 'Databases' }, items: ['PostgreSQL', 'MySQL', 'Flyway'] },
  { group: { pt: 'Front-end', en: 'Front end' }, items: ['React'] },
  { group: { pt: 'Ferramentas', en: 'Tools' }, items: ['Docker', 'Git', 'GitHub', 'IntelliJ IDEA'] },
];

export const education: { course: Localized; school: string; period: Localized }[] = [
  {
    course: { pt: 'Bacharelado em Ciência da Computação', en: "Bachelor's in Computer Science" },
    school: 'UNIP',
    period: { pt: '2026 — 2029 (cursando)', en: '2026 — 2029 (in progress)' },
  },
  {
    course: { pt: 'Pós-graduação em IA e Machine Learning', en: 'Postgraduate in AI and Machine Learning' },
    school: 'Anhanguera',
    period: { pt: '2024 — 2025', en: '2024 — 2025' },
  },
  {
    course: { pt: 'Tecnólogo em Desenvolvimento Back-end', en: 'Associate Degree in Back-end Development' },
    school: 'Anhanguera',
    period: { pt: '2021 — 2024', en: '2021 — 2024' },
  },
];

export type Project = {
  title: string | Localized; // use { pt, en } só quando o nome muda entre idiomas
  description: Localized;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  status?: Localized;
};

export const projects: Project[] = [
  {
    title: { pt: 'Sistema de Controle de Produção', en: 'Production Control System' },
    description: {
      pt: 'API para uma linha de prensas industriais, baseada em um processo real. Gerencia o fluxo completo: entrada de matéria-prima, ordens de produção e estoque de peças finalizadas. Tem regras de negócio com transição de estados das ordens (planejada, em processamento, concluída) e níveis de estoque (alta, média, crítica).',
      en: 'API for an industrial press line, based on a real process. Manages the full flow: raw material intake, production orders and finished parts inventory. Includes business rules for order state transitions (planned, in progress, completed) and stock levels (high, medium, critical).',
    },
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'MapStruct', 'Docker'],
    repo: 'https://github.com/MathFe/production-control',
    featured: true,
    status: { pt: 'Em desenvolvimento', en: 'In progress' },
  },
  {
    title: 'Finance API',
    description: {
      pt: 'API REST de finanças pessoais com cadastro e autenticação via JWT, gestão de categorias e transações. Arquitetura em camadas, migrações com Flyway, PostgreSQL em Docker e front-end em React.',
      en: 'Personal finance REST API with user registration and JWT authentication, plus category and transaction management. Layered architecture, Flyway migrations, PostgreSQL on Docker and a React front end.',
    },
    tags: ['Java 21', 'Spring Boot', 'JWT', 'PostgreSQL', 'Docker', 'React'],
    repo: 'https://github.com/MathFe/finance-api',
  },
  {
    title: 'EventClean',
    description: {
      pt: 'API para gerenciamento de eventos e locais, seguindo Clean Architecture para uma melhor organização e manutenção do código.',
      en: 'API for managing events and venues, following Clean Architecture for better code organization and maintainability.',
    },
    tags: ['Java 17', 'Spring', 'Flyway', 'Docker', 'Clean Architecture'],
    repo: 'https://github.com/MathFe/EventClean',
  },
  {
    title: 'Image Recognition',
    description: {
      pt: 'Aplicação de reconhecimento de imagens com back-end em FastAPI e interface em React.',
      en: 'Image recognition app with a FastAPI back end and a React interface.',
    },
    tags: ['Python', 'FastAPI', 'React', 'Machine Learning'],
    repo: 'https://github.com/MathFe/image-recognition',
  },
];

export type Job = {
  role: Localized;
  company: string;
  period: Localized;
  description: Localized[];
};

export const experience: Job[] = [
  {
    role: { pt: 'Programador de Robôs Industriais', en: 'Industrial Robot Programmer' },
    company: 'General Motors do Brasil',
    period: { pt: 'jul 2024 — atual', en: 'Jul 2024 — present' },
    description: [
      {
        pt: 'Desenvolvimento de soluções de automação e integração para mais de 250 processos industriais.',
        en: 'Building automation and integration solutions for more than 250 industrial processes.',
      },
      {
        pt: 'Uso de Java em sistemas de supervisão, monitoramento e análise de dados de linhas de produção.',
        en: 'Using Java in supervision, monitoring and data analysis systems for production lines.',
      },
    ],
  },
  {
    role: { pt: 'Técnico de Manutenção e Suporte de TI', en: 'IT Maintenance and Support Technician' },
    company: 'Retífica Paraíso',
    period: { pt: 'jan 2022 — jul 2024', en: 'Jan 2022 — Jul 2024' },
    description: [
      {
        pt: 'Manutenção de computadores e máquinas industriais; instalação e configuração de softwares.',
        en: 'Maintenance of computers and industrial machines; software installation and configuration.',
      },
      {
        pt: 'Suporte técnico a usuários e configuração básica de redes e equipamentos.',
        en: 'User technical support and basic network and equipment configuration.',
      },
    ],
  },
  {
    role: { pt: 'Estagiário de Suporte Técnico', en: 'Technical Support Intern' },
    company: 'Lotus Cell',
    period: { pt: 'jan 2021 — jan 2022', en: 'Jan 2021 — Jan 2022' },
    description: [
      {
        pt: 'Análise e resolução de chamados, com consultas em banco de dados SQL.',
        en: 'Ticket analysis and resolution, including SQL database queries.',
      },
      {
        pt: 'Apoio na manutenção da aplicação com Python e Django: validação de funcionalidades e identificação de falhas.',
        en: 'Supported application maintenance with Python and Django: feature validation and bug identification.',
      },
    ],
  },
  {
    role: { pt: 'Aprendiz SENAI', en: 'SENAI Apprentice' },
    company: 'General Motors do Brasil',
    period: { pt: 'jan 2019 — dez 2020', en: 'Jan 2019 — Dec 2020' },
    description: [
      {
        pt: 'Manutenção e operação de sistemas industriais, automação, controle de equipamentos e leitura de diagramas técnicos.',
        en: 'Maintenance and operation of industrial systems, automation, equipment control and technical diagram reading.',
      },
    ],
  },
];
