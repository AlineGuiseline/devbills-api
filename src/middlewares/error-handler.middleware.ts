import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

export function errorHandler(
    error: AppError | Error,
    _: Request,
    res: Response,
    __: NextFunction
): void {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        });
    }
}
