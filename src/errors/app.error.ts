import { StatusCodes } from "http-status-codes";

export class AppError extends Error {
    public statusCode: StatusCodes;
    public message: string | string[];

    constructor(message: string | string[], statusCode: StatusCodes) { 
        super(typeof message === 'string' ? message: message.join(', '));
        
        this.message = message;
        // o super indica que ele está passando para a classe acima dele
        // como se ele fosse apenas um filho daquela classe
        // nesse caso, nós queremos que seja um Error do JS, mas queremos passar
        // mais uma propriedade para ele (no caso, o statusCode)

        this.statusCode = statusCode;
    }
}