export enum UserType {
  RESPONSAVEL = 'RESPONSAVEL',
  PROFISSIONAL = 'PROFISSIONAL',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  nome: string;
  email: string;
  tipo: UserType;
  created_at: string;
}

export interface Student {
  id: string;
  nome: string;
  data_nascimento: string;
  responsavel_id: string;
  observacoes: string;
}

export interface Professional {
  slug: string;
  nome: string;
  cargo: string;
  especialidade: string;
  bio: string;
  abordagens: string[];
  image: string;
}

export interface Message {
  id: string;
  remetente_id: string;
  destinatario_id: string;
  remetente_nome?: string; // Helper for frontend
  conteudo: string;
  created_at: string;
  lida?: boolean;
}

export interface Orientation {
  id: string;
  student_id: string;
  professional_id: string;
  professional_nome?: string; // Helper for frontend
  titulo: string;
  descricao: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  titulo: string;
  slug: string;
  resumo?: string;
  conteudo: string;
  autor: string;
  created_at: string;
  publicado: boolean;
  image?: string;
}

// Navigation Type
export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}