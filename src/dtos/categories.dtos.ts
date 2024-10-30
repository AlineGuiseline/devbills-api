// DTO: Data Transfer Object
// é um padrão de software voltado para a transferência de dados entre as 
// camadas de uma aplicação
// nós vamos definir todos os tipos de transferências de dados que nós vamos trazer

import { z } from 'zod';

export const createCategorySchema = {
    title: z.string(),
    color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
};

const createCategoryObject = z.object(createCategorySchema);

export type CreateCategoryDTO = z.infer<typeof createCategoryObject>;