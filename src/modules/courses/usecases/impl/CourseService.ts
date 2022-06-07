import { Curso, PrismaClient } from '@prisma/client';
import Logger, { logger } from '../../../../shared/logger';
import { generateUUID } from '../../../../shared/utils/UUID';
import { CreateCourseRequest } from '../../dto/CreateCourseDTO';
import { ICourseService } from '../ports/ICourseService';

const prisma = new PrismaClient();

export class CourseService implements ICourseService {
  private logger: logger;

  constructor() {
    this.logger = Logger('CourseService');
  }

  async create(course: CreateCourseRequest): Promise<void> {
    try {
      await prisma.curso.create({
        data: {
          id: generateUUID(),
          nome: course.nome,
          descricao: course.descricao,
        },
      });
    } catch {
      this.logger.error('Error creating course');
      throw new Error('Error creating course');
    }
  }

  list(): Promise<Curso[]> {
    return prisma.curso.findMany();
  }

  findById(id: string): Promise<Curso | null> {
    return prisma.curso.findFirst({
      where: {
        id,
      },
    });
  }
}
