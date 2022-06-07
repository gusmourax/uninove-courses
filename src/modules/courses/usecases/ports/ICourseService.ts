import { Curso } from '@prisma/client';
import { CreateCourseRequest } from '../../dto/CreateCourseDTO';

export interface ICourseService {
  create(course: CreateCourseRequest): Promise<void>;
  list(): Promise<Curso[]>;
  findById(id: string): Promise<Curso | null>;
}
