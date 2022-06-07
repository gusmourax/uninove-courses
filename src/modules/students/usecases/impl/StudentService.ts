import { PrismaClient } from '@prisma/client';
import Logger, { logger } from '../../../../shared/logger';
import { generateUUID } from '../../../../shared/utils/UUID';
import { CreateStudentRequest, CreateStudentResponse, FindStudentResponse } from '../../dto/CreateStudentDTO';
import { generateRA } from '../../utils/RA';
import { IStudentService } from '../ports/IStudentService';

const prisma = new PrismaClient();

export class StudentService implements IStudentService {
  private logger: logger;

  constructor() {
    this.logger = Logger('StudentService');
  }

  async create(student: CreateStudentRequest): Promise<CreateStudentResponse> {
    try {
      const createdStudent = await prisma.estudante.create({
        data: {
          id: generateUUID(),
          email: student.email,
          nome: student.nome,
          cursoId: student.cursoId,
          ra: generateRA(),
        },
      });
      return {
        ra: createdStudent.ra,
      };
    } catch {
      this.logger.error('Error creating student');
      throw new Error('Error creating student');
    }
  }

  async findByRa(ra: string): Promise<FindStudentResponse> {
    try {
      const student = await prisma.estudante.findFirst({
        where: {
          ra,
        },
        include: {
          curso: true,
        },
      });
      if (!student) throw new Error('Student not found');
      return {
        id: student.id,
        nome: student.nome,
        email: student.email,
        ra: student.ra,
        curso: {
          nome: student?.curso?.nome,
          descricao: student?.curso?.descricao,
        },
      };
    } catch {
      this.logger.error('Error finding student');
      throw new Error('Error finding student');
    }
  }

  async list(): Promise<FindStudentResponse[]> {
    try {
      const students = await prisma.estudante.findMany({
        include: {
          curso: true,
        },
      });

      return students.map((student) => ({
        id: student.id,
        nome: student.nome,
        email: student.email,
        ra: student.ra,
        curso: {
          nome: student?.curso?.nome,
          descricao: student?.curso?.descricao,
        },
      }));
    } catch {
      this.logger.error('Error listing students');
      throw new Error('Error listing students');
    }
  }
}
