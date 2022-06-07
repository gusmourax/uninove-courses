import { Router } from 'express';
import { CourseController } from '../controllers/CourseController';

const courseController = new CourseController();
const routes = Router();

routes.post('/', courseController.create);
routes.get('/', courseController.list);
routes.get('/:id', courseController.findById);

export default routes;
