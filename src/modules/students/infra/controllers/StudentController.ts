import { Request, Response } from 'express';
import Logger, { logger } from '../../../../shared/logger';
import { CreateStudentRequest } from '../../dto/CreateStudentDTO';
import { StudentService } from '../../usecases/impl/StudentService';
import { IStudentService } from '../../usecases/ports/IStudentService';

export class StudentController {
  private logger: logger;
  private studentService: IStudentService;

  constructor() {
    this.logger = Logger('StudentController');
    this.studentService = new StudentService();
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { cursoId, email, nome } = req.body as CreateStudentRequest;
      const response = await this.studentService.create({
        cursoId,
        email,
        nome,
      });
      return res.status(201).json(response);
    } catch (error: any) {
      this.logger.error(error);
      const statusCode = error.statusCode || 500;
      return res.status(statusCode).json(error);
    }
  };

  findByRa = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { ra } = req.params;
      const response = await this.studentService.findByRa(ra);
      return res.status(200).json(response);
    } catch (error: any) {
      this.logger.error(error);
      const statusCode = error.statusCode || 500;
      return res.status(statusCode).json(error);
    }
  };

  list = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.studentService.list();
      return res.status(200).json(response);
    } catch (error: any) {
      this.logger.error(error);
      const statusCode = error.statusCode || 500;
      return res.status(statusCode).json(error);
    }
  };
}
