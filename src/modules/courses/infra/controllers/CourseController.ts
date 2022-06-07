import { Request, Response } from 'express';
import Logger, { logger } from '../../../../shared/logger';
import { CreateCourseRequest } from '../../dto/CreateCourseDTO';
import { CourseService } from '../../usecases/impl/CourseService';
import { ICourseService } from '../../usecases/ports/ICourseService';

export class CourseController {
  private logger: logger;
  private courseService: ICourseService;

  constructor() {
    this.logger = Logger('CourseController');
    this.courseService = new CourseService();
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { nome, descricao } = req.body as CreateCourseRequest;
      await this.courseService.create({ nome, descricao });
      return res.status(201).send();
    } catch (error: any) {
      this.logger.error(error);
      const statusCode = error.statusCode || 500;
      return res.status(statusCode).send(error);
    }
  };

  list = async (req: Request, res: Response): Promise<Response> => {
    try {
      const courses = await this.courseService.list();
      return res.status(200).json(courses);
    } catch (error: any) {
      this.logger.error(error);
      const statusCode = error.statusCode || 500;
      return res.status(statusCode).send(error);
    }
  };

  findById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const course = await this.courseService.findById(id);
      if (!course) return res.status(404).json({ message: "Course doesn't exists." });
      return res.status(200).json(course);
    } catch (error: any) {
      return res.status(404).json({ message: "Course doesn't exists." });
    }
  };
}
