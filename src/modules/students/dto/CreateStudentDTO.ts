export interface CreateStudentRequest {
  nome: string;
  email: string;
  cursoId: string;
}

export interface CreateStudentResponse {
  ra: string;
}

export interface FindStudentResponse {
  id: string;
  nome: string;
  email: string;
  ra: string;
  curso: {
    nome?: string;
    descricao?: string;
  };
}
