import { Router } from 'express';
import { baseRoutes } from './base.route';
import { categoriesRoutes } from './categories.route';

export const routes = Router();

routes.use('/', baseRoutes);
routes.use('/categories', categoriesRoutes);
// a rota bate no /categories, encontra o categoriesRoutes, vai atrás dessa variável
// e executa o que está dentro dela