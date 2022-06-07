import { CreateStudentRequest, CreateStudentResponse, FindStudentResponse } from '../../dto/CreateStudentDTO';

export interface IStudentService {
  create(student: CreateStudentRequest): Promise<CreateStudentResponse>;
  findByRa(ra: string): Promise<FindStudentResponse>;
  list(): Promise<FindStudentResponse[]>;
}
