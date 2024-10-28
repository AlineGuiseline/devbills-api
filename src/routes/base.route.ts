import { Router } from 'express';

export const baseRoutes = Router();

import packageJson from '../../package.json';

baseRoutes.get('/', (_, res) => {
    // usar underline signifca que você não vai usar a variável
    // nesse caso, nós só a criamos porque precisamos da resposta
    const { name, version, description, author} = packageJson;

    res.status(200).json({ name, version, description, author });
})

// ENTITY => coração da aplicação. Ela traz a modelagem de quais dados
// nossa aplicação tem
// SERVICE => tem como objetivo possuir as regras de negócio (é quem
// faz a roda girar)
// CONTROLLER => controla qual service ou método chamar após a requisição
// O caminho é sempre de duas vias: quando chamos uma rota na API, é assim:
// ROUTE (chamamos a rota na API) -> CONTROLLER (vai bater no controller-> SERVICE (o controller vai saber qual service utilizar e quais regras de negócio vão acontecer naquela rota)-> ENTITY (vai consultar a entidade para ter a modelagem concisa) e depois:
// ENTITY (devolve a solicitação para o service) -> SERVICE -> CONTROLLER -> ROUTE (devolve a resposta para o usuário)