import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

// o middleware é tudo aquilo que podemos executar antes ou depois das nossas rotas
export function errorHandler(
    // a doc do express fala que todo middleware que tiver 4 parâmetros é, automaticamente,
    // um error handler
    error: AppError | Error,
     _: Request, 
     res: Response, 
     __: NextFunction
) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message,
    });
}
