import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import Logger from '../../../logger';

const logger = Logger('ExpressApp');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3030, () => logger.info(`Server started on port ${process.env.PORT || 3030}`));
