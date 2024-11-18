import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { setupMongo } from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
// quando utilizamos libs externas no TS existem 2 cenários:
// 1. a lib foi escrita com TS ou preparada para TS e possuem
// as definições de tipos, para o TS conseguir "enxergar"
// aquela lib
// 2. a lib foi escrita com JS e não tem suporte para TS, mas
// foi feita em outro pacote/lib as definições de tipo para
// poder ser usada com TS

setupMongo().then(() => {
    const app = express();

    app.use(
        cors({
            origin: process.env.FRONT_URL,
        }),
    );

    app.use(json());
    app.use(routes);
    app.use(errorHandler);

    app.listen(3000, () => console.log('🚀 App is running at port 3000!'));
});