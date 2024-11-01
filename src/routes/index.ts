import { Router } from 'express';
import { baseRoutes } from './base.route';
import { categoriesRoutes } from './categories.route';
import { transactionsRoutes } from './transactions.route';

export const routes = Router();

routes.use('/', baseRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/transactions', transactionsRoutes);
// a rota bate no /categories, encontra o categoriesRoutes, vai atrás dessa variável
// e executa o que está dentro dela