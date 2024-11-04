import { Router } from "express";
import { ParamsType, validator } from "../middlewares/validator.middleware";
import { createTransactionsSchema, getDashboardSchema, indexTransactionsSchema } from "../dtos/transactions.dto";
import { TransactionsController } from "../controllers/transactions.controller";
import { TransactionsFactory } from "../factories/transactions.factory";

export const transactionsRoutes = Router();

const controller = new TransactionsController(
    TransactionsFactory.getServiceInstance()
);

transactionsRoutes.post('/', validator({
    schema: createTransactionsSchema,
    type: ParamsType.BODY,
    }), 
    controller.create,
);

transactionsRoutes.get('/',
    validator({
    schema: indexTransactionsSchema,
    type: ParamsType.QUERY,
}), controller.index);

transactionsRoutes.get(
    '/dashboard', 
    validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY,
}), controller.getDashboard);