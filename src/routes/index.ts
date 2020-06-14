import {Router} from 'express';
import adRouter from './ads.router';

const routes = Router();

routes.use('/ads', adRouter);

export default routes;