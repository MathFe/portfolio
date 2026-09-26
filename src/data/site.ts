// Todo o conteúdo do portfolio fica aqui. Edite este arquivo para atualizar o site.

export const site = {
  name: 'Matheus Ferreira',
  role: 'Desenvolvedor Full Stack',
  location: 'São José dos Campos, SP',
  url: 'https://mathfe.dev',
  description:
    'Matheus Ferreira, desenvolvedor full stack com foco em Java e Spring Boot. APIs REST, automação industrial, projetos e contato.',
  headline: 'Construo APIs robustas e software que conecta o código ao chão de fábrica.',
  intro:
    'Desenvolvedor Full Stack com cerca de 2 anos de experiência profissional na General Motors, criando soluções de automação e integração para processos industriais. Trabalho com Java 21, Spring Boot, PostgreSQL e Docker.',
  available: true,
};

export const links = {
  email: 'matheusferreirasjc@gmail.com',
  github: 'https://github.com/MathFe',
  linkedin: 'https://www.linkedin.com/in/matheus-ferreira-044352165/',
  resume: '/matheus-ferreira-curriculo.pdf',
};

export const about = [
  'Atuo na General Motors em São José dos Campos, desenvolvendo soluções de automação e integração para mais de 250 processos industriais. Uso Java em sistemas de supervisão, monitoramento e análise de dados de linhas de produção.',
  'No desenvolvimento, meu foco é o back-end: construo APIs REST com Java 21, Spring Boot, Spring Security, JPA/Hibernate e PostgreSQL, com ambiente em Docker e migrações com Flyway. No front-end, trabalho com React e JavaScript.',
  'Sou tecnólogo em Desenvolvimento Back-end, pós-graduado em Inteligência Artificial e Machine Learning, e atualmente curso Ciência da Computação na UNIP.',
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Linguagens', items: ['Java', 'Python', 'JavaScript', 'PHP', 'SQL'] },
  {
    group: 'Back-end',
    items: ['Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'Hibernate', 'API REST', 'MapStruct', 'Django'],
  },
  { group: 'Banco de dados', items: ['PostgreSQL', 'MySQL', 'Flyway'] },
  { group: 'Front-end', items: ['React'] },
  { group: 'Ferramentas', items: ['Docker', 'Git', 'GitHub', 'IntelliJ IDEA'] },
];

export const education = [
  { course: 'Bacharelado em Ciência da Computação', school: 'UNIP', period: '2026 — 2029 (cursando)' },
  { course: 'Pós-graduação em IA e Machine Learning', school: 'Anhanguera', period: '2024 — 2025' },
  { course: 'Tecnólogo em Desenvolvimento Back-end', school: 'Anhanguera', period: '2021 — 2024' },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    title: 'Sistema de Controle de Produção',
    description:
      'API para uma linha de prensas industriais, baseada em um processo real. Gerencia o fluxo completo: entrada de matéria-prima, ordens de produção e estoque de peças finalizadas. Tem regras de negócio com transição de estados das ordens (planejada, em processamento, concluída) e níveis de estoque (alta, média, crítica).',
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'MapStruct', 'Docker'],
    repo: 'https://github.com/MathFe/production-control',
    featured: true,
    status: 'Em desenvolvimento',
  },
  {
    title: 'Finance API',
    description:
      'API REST de finanças pessoais com cadastro e autenticação via JWT, gestão de categorias e transações. Arquitetura em camadas, migrações com Flyway, PostgreSQL em Docker e front-end em React.',
    tags: ['Java 21', 'Spring Boot', 'JWT', 'PostgreSQL', 'Docker', 'React'],
    repo: 'https://github.com/MathFe/finance-api',
  },
  {
    title: 'EventClean',
    description:
      'API para gerenciamento de eventos e locais, seguindo Clean Architecture para uma melhor organização e manutenção do código.',
    tags: ['Java 17', 'Spring', 'Flyway', 'Docker', 'Clean Architecture'],
    repo: 'https://github.com/MathFe/EventClean',
  },
  {
    title: 'Image Recognition',
    description:
      'Aplicação de reconhecimento de imagens com back-end em FastAPI e interface em React.',
    tags: ['Python', 'FastAPI', 'React', 'Machine Learning'],
    repo: 'https://github.com/MathFe/image-recognition',
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export const experience: Job[] = [
  {
    role: 'Programador de Robôs Industriais',
    company: 'General Motors do Brasil',
    period: 'jul 2024 — atual',
    description: [
      'Desenvolvimento de soluções de automação e integração para mais de 250 processos industriais.',
      'Uso de Java em sistemas de supervisão, monitoramento e análise de dados de linhas de produção.',
    ],
  },
  {
    role: 'Técnico de Manutenção e Suporte de TI',
    company: 'Retífica Paraíso',
    period: 'jan 2022 — jul 2024',
    description: [
      'Manutenção de computadores e máquinas industriais; instalação e configuração de softwares.',
      'Suporte técnico a usuários e configuração básica de redes e equipamentos.',
    ],
  },
  {
    role: 'Estagiário de Suporte Técnico',
    company: 'Lotus Cell',
    period: 'jan 2021 — jan 2022',
    description: [
      'Análise e resolução de chamados, com consultas em banco de dados SQL.',
      'Apoio na manutenção da aplicação com Python e Django: validação de funcionalidades e identificação de falhas.',
    ],
  },
  {
    role: 'Aprendiz SENAI',
    company: 'General Motors do Brasil',
    period: 'jan 2019 — dez 2020',
    description: [
      'Manutenção e operação de sistemas industriais, automação, controle de equipamentos e leitura de diagramas técnicos.',
    ],
  },
];
