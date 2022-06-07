import { Router } from 'express';
import coursesRoutes from '../../../../modules/courses/infra/routes';
import studentsRoutes from '../../../../modules/students/infra/routes';

const routes = Router();

routes.use('/courses', coursesRoutes);
routes.use('/students', studentsRoutes);

export default routes;
