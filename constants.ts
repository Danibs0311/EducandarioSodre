import { NavItem, BlogPost, Professional } from './types';

export const COMPANY_INFO = {
  name: 'Educandário Sodré',
  phone: '(71) 3309-5251',
  whatsapp: '557133095251',
  address: 'Estrada do Matadouro, Águas Claras, Salvador - BA',
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Educandário+Sodré+Estrada+do+Matadouro+Águas+Claras+Salvador',
  social: {
    instagram: 'https://www.instagram.com/educandario_sodre',
    facebook: 'https://facebook.com', 
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Bolsas & Parcerias', path: '/bolsas' },
  { label: 'Inclusão & NAE', path: '/nucleo-atendimento-especializado' },
  { 
    label: 'Nossos Cursos', 
    path: '#',
    subItems: [
      { label: 'Educação Infantil', path: '/educacao-infantil' },
      { label: 'Ensino Fundamental I', path: '/ensino-fundamental-1' },
      { label: 'Ensino Fundamental II', path: '/ensino-fundamental-2' },
      { label: 'Ensino Médio', path: '/ensino-medio' },
    ]
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Fale Conosco', path: '/contato' },
  { label: 'Portal do Aluno', path: '/area-responsavel' },
];

export const TEAM_MEMBERS: Professional[] = [
  {
    slug: 'psicopedagogia',
    nome: "Léia Neves Gomes",
    cargo: "Coordenadora & Psicopedagoga",
    especialidade: "Psicopedagogia Clínica e Institucional",
    bio: "Especialista em processos de aprendizagem e inclusão, Léia Neves Gomes lidera o NAE com foco no desenvolvimento cognitivo e emocional, garantindo que as barreiras pedagógicas sejam superadas através de intervenções personalizadas.",
    abordagens: [
      "Diagnóstico psicopedagógico clínico",
      "Intervenção em dificuldades de aprendizagem (Dislexia, TDAH, TEA)",
      "Adaptação curricular e de materiais didáticos",
      "Orientação e suporte direto às famílias",
      "Acompanhamento sistemático do progresso escolar"
    ],
    image: "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/leia-sodre-prof.jpg"
  },
  {
    slug: 'neuropsicopedagogia',
    nome: "A Definir",
    cargo: "Neuropsicopedagoga",
    especialidade: "Neurociência aplicada à Educação",
    bio: "Nossa atuação em neuropsicopedagogia busca compreender como o cérebro aprende, integrando conhecimentos da neurologia e psicologia para otimizar o processo de ensino-aprendizagem.",
    abordagens: [
      "Avaliação das funções executivas",
      "Estimulação cognitiva",
      "Reabilitação neuropsicológica",
      "Estratégias baseadas em neuroplasticidade"
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400"
  },
  {
    slug: 'psicologia',
    nome: "A Definir",
    cargo: "Psicóloga",
    especialidade: "Psicologia Escolar e do Desenvolvimento",
    bio: "O suporte psicológico no NAE visa o bem-estar emocional e a saúde mental dos nossos alunos, promovendo um ambiente seguro para o crescimento pessoal e social.",
    abordagens: [
      "Acolhimento emocional individual e grupal",
      "Mediação de conflitos",
      "Promoção de competências socioemocionais",
      "Prevenção ao bullying e ansiedade escolar"
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=400"
  },
  {
    slug: 'fonoaudiologia',
    nome: "A Definir",
    cargo: "Fonoaudióloga Escolar",
    especialidade: "Linguagem e Aprendizagem",
    bio: "A fonoaudiologia escolar atua na prevenção e auxílio de questões relacionadas à comunicação oral e escrita, essenciais para o sucesso acadêmico.",
    abordagens: [
      "Estimulação de consciência fonológica",
      "Acompanhamento de trocas na fala e escrita",
      "Aprimoramento da linguagem expressiva e compreensiva",
      "Assessoria aos professores sobre processamento auditivo"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400"
  }
];

export const CONTENT = {
  home: {
    title: "Formando cidadãos com autonomia e valores",
    text: "No Educandário Sodré, em Águas Claras, seu filho encontra um ambiente seguro e estimulante para crescer. Oferecemos Educação Infantil, Fundamental e Médio com uma estrutura pensada para o desenvolvimento integral.\n\nContamos com pátio coberto, biblioteca, internet, refeitório e quadra para atividades esportivas. Além disso, facilitamos o acesso à educação de qualidade através de parcerias com Educa Mais Brasil e Quero Bolsa."
  },
  scholarships: {
    title: "Bolsas de Estudo & Parcerias",
    text: "Acreditamos que a educação de excelência deve ser acessível. O Educandário Sodré mantém parcerias estratégicas para garantir que famílias de Águas Claras e região possam oferecer o melhor futuro para seus filhos.",
    educaMais: {
      title: "Educa Mais Brasil",
      description: "Somos parceiros oficiais do maior programa de bolsas de estudo do país. Através do Educa Mais Brasil, você pode garantir descontos de até 50% em todas as mensalidades, do Infantil ao Médio.",
      howTo: "Basta acessar o site do Educa Mais Brasil, selecionar o Educandário Sodré e escolher a série desejada para gerar seu cupom de pré-matrícula."
    },
    queroBolsa: {
      title: "Quero Bolsa",
      description: "Também estamos presentes no Quero Bolsa, facilitando sua entrada na escola com processos simplificados e descontos garantidos até o final do ciclo escolar."
    }
  },
  nae: {
    title: "Um olhar especial para cada aluno",
    text: "O Educandário Sodré acredita que a educação deve ser para todos. Por isso, nosso Núcleo de Atendimento Especializado (NAE) oferece suporte psicopedagógico e emocional, garantindo que alunos com neurodivergências ou dificuldades de aprendizagem tenham o acolhimento necessário.\n\nAqui, a inclusão acontece na prática, com profissionais capacitados e parceria constante com as famílias.",
    professional: {
      name: "Léia Neves Gomes",
      role: "Psicopedagoga Especialista",
      bio: "Com vasta experiência no acompanhamento de processos de aprendizagem e inclusão escolar, Léia Neves Gomes coordena as intervenções psicopedagógicas do Educandário Sodré, focando no desenvolvimento da autonomia e superação de barreiras pedagógicas."
    }
  },
  infantil: {
    title: "Descobertas e Alegria",
    text: "Nosso parquinho e áreas de convivência são o cenário perfeito para os primeiros passos na vida escolar. Na Educação Infantil, focamos no desenvolvimento motor, social e cognitivo através do brincar.\n\nCuidamos para que a transição seja tranquila e cheia de afeto."
  },
  fund1: {
    title: "A base do saber",
    text: "Utilizando nossa biblioteca e recursos tecnológicos, estimulamos a alfabetização e o letramento de forma lúdica e eficaz.\n\nNo Fundamental I, a criança desenvolve autonomia e organização, preparando-se para voos maiores."
  },
  fund2: {
    title: "Conhecimento e Cidadania",
    text: "Com suporte de internet para pesquisas e projetos interdisciplinares, o aluno do Fundamental II amplia sua visão de mundo.\n\nA quadra poliesportiva é palco de aprendizados sobre trabalho em equipe, disciplina e saúde."
  },
  medio: {
    title: "Rumo ao Futuro",
    text: "Preparação sólida para o ENEM e mercado de trabalho. Nosso Ensino Médio alia conteúdo forte à formação humana.\n\nGaranta sua vaga com condições especiais através de nossas parcerias de bolsas."
  },
  blog: {
    title: "Acontece no Sodré",
    text: "Acompanhe nossos eventos, dicas pedagógicas e novidades sobre o ano letivo em Águas Claras."
  },
  contato: {
    title: "Visite o Educandário Sodré",
    text: "Estamos de portas abertas para receber sua família na Estrada do Matadouro. Venha conhecer nossa estrutura completa."
  }
};

// Mock Blog Data
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    titulo: 'Matrículas Abertas: Garanta sua Bolsa',
    slug: 'matriculas-abertas-bolsas',
    resumo: 'Saiba como utilizar o Educa Mais Brasil e Quero Bolsa para estudar no Sodré.',
    conteudo: 'A educação de qualidade está ao seu alcance...',
    autor: 'Secretaria',
    created_at: '2023-11-25',
    publicado: true,
    image: 'https://picsum.photos/800/400?random=11'
  },
  {
    id: '2',
    titulo: 'Nossa Feira de Ciências foi um sucesso!',
    slug: 'feira-ciencias',
    resumo: 'Alunos do Fundamental e Médio apresentaram projetos inovadores no pátio da escola.',
    conteudo: 'Criatividade e ciência caminharam juntas...',
    autor: 'Coordenação',
    created_at: '2023-11-15',
    publicado: true,
    image: 'https://picsum.photos/800/400?random=12'
  },
  {
    id: '3',
    titulo: 'A importância da Leitura na Infância',
    slug: 'leitura-infancia',
    resumo: 'Como nossa biblioteca atua no incentivo aos pequenos leitores.',
    conteudo: 'Ler abre portas para mundos mágicos...',
    autor: 'Bibliotecária',
    created_at: '2023-11-10',
    publicado: true,
    image: 'https://picsum.photos/800/400?random=13'
  }
];