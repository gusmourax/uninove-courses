import { Router } from 'express';
import { StudentController } from '../controllers/StudentController';

const studentController = new StudentController();
const routes = Router();

routes.post('/', studentController.create);
routes.get('/:ra', studentController.findByRa);
routes.get('/', studentController.list);

export default routes;
