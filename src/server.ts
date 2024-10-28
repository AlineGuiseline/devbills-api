import express, { json } from 'express';
import { routes } from './routes';
// quando utilizamos libs externas no TS existem 2 cenários:
// 1. a lib foi escrita com TS ou preparada para TS e possuem
// as definições de tipos, para o TS conseguir "enxergar"
// aquela lib
// 2. a lib foi escrita com JS e não tem suporte para TS, mas
// foi feita em outro pacote/lib as definições de tipo para
// poder ser usada com TS

const app = express();

app.use(json());
app.use(routes);

app.listen(3000, () => console.log('🚀 App is running at port 3000!'));
