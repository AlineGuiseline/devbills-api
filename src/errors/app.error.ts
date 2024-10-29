import { StatusCodes } from "http-status-codes";

export class AppError extends Error {
    public statusCode: StatusCodes
    ;

    constructor(message: string, statusCode: StatusCodes) { 
        super(message);
        // o super indica que ele está passando para a classe acima dele
        // como se ele fosse apenas um filho daquela classe
        // nesse caso, nós queremos que seja um Error do JS, mas queremos passar
        // mais uma propriedade para ele (no caso, o statusCode)

        this.statusCode = statusCode;
    }
}