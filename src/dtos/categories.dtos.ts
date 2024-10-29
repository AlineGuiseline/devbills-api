// DTO: Data Transfer Object
// é um padrão de software voltado para a transferência de dados entre as 
// camadas de uma aplicação
// nós vamos definir todos os tipos de transferências de dados que nós vamos trazer

export type CreateCategoryDTO = {
    title: string;
    color: string;
}