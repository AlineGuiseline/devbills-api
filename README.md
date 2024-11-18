# DevBills API

Este repositório contém o back-end de uma aplicação construída com **Node.js**, **TypeScript**, **Express**, **MongoDB** via **Mongoose**, e **Docker**.Esta API fornece funcionalidades para:

- criar categorias por nome e cor
- criar transações financeiras por id, nome, valor, data e tipo
- listar as categorias e as transações
- filtrar as transações (por nome, por período início-fim e por categoria)
- filtrar as categorias (por período)

### 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript.
- **TypeScript:** Suporte a tipagem estática para maior segurança e escalabilidade.
- **Express:** Framework minimalista para desenvolvimento de aplicações web.
- **MongoDB:** Banco de dados NoSQL orientado a documentos.  
- **Mongoose:** Biblioteca de modelagem de dados para MongoDB.
- **Docker:** Gerenciamento de contêineres para empacotar e executar o aplicativo de forma consistente.
- **Thunder Client:** Extensão do VSCode para testar as rotas da API.

### ❗ Pré-requisitos
Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)  
- [Docker](https://www.docker.com) e [Docker Compose](https://docs.docker.com/compose/)  
- [MongoDBCompass](https://www.mongodb.com/products/tools/compass)

### 🚀 Instalação e Configuração

1. Clone o repositório
```
git clone https://github.com/AlineGuiseline/devbills-api.git
cd devbills-api
```

2. Instale as dependências

```
npm install
```

3. Configuração do Ambiente

Crie um arquivo .env na raiz do projeto, com as seguintes variáveis de ambiente:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/
```
*PORT:* Porta onde a API será executada.
*MONGO_URI:* URL de conexão ao MongoDB.

4. Compilação do TypeScript

Compile o TypeScript para JavaScript (necessário para rodar o projeto fora do ambiente Docker):

```
npm run build
```

### Executando o Projeto

#### Com Docker (Recomendado)
1. Certifique-se de que o Docker esteja em execução.

2. Execute o seguinte comando para construir e iniciar os contêineres Docker:

```
docker-compose up --build
```
3. A API estará disponível em http://localhost:3000.

#### Localmente (Sem Docker)
1. Inicie o MongoDB: Se não estiver usando Docker, você precisará ter uma instância do MongoDB em execução. Você pode iniciar o MongoDB localmente ou configurar o MONGO_URI para apontar para uma instância remota.

3. Inicie o Servidor:
```
npm run dev
```

3. A API estará disponível em http://localhost:3000.

### 📦 **Estrutura do Projeto**

```plaintext
project-root/
├── build/                 # Código transpilado para JavaScript
├── src/
   ├── controllers         # Lógica dos controladores das categorias e das transações
      └── categories.controller.ts
      └── transactions.controller.ts
      └── types.ts
    ├── database/          # Configuração do banco de dados
      └──  repositories/
           └── categories.repository.ts
           └── transactions.repository.ts
      └── schemas/
           └── category.schema.ts
           └── transactions.schema.ts
    ├── dtos/              # Modelos de transferência de dados
      └── categories.dtos.ts
      └── transactions.dto.ts
   ├── entities/           # Entidades da aplicação
      └── balance.entity.ts
      └── category.entities.ts
      └── expense.entity.ts
      └── transactions.entity.ts
   ├── errors/             # Tratamento de erros
      └── categories.factory.ts
      └── transactions.factory.ts
   ├── factories/          # Modelos das instâncias
      ├── app.error.ts
   ├── middlewares/        # Middlewares para validação e erros
      └── error-handler.middleware.ts
      └── validator.middleware.ts
   ├── routes/             # Rotas das categorias e das transações
      └── base.route.ts
      └── categories.route.ts
      └── index.ts
      └── transactions.route.ts
   ├── services/           # Modelos de criação das categorias e das transações
      └── categories.service
      └── transactions.service
    ├── server.ts           # Inicialização do servidor
├── .prettierrc             # Configuração do Prettier
├── docker-compose.yml      # Configuração Docker Compose
├── Dockerfile              # Configuração Docker
├── eslint.config           # Configuração do ESLint
└── tsconfig.json           # Configuração TypeScript
```
### 🧪 Testando as Rotas com Thunder Client
Para testar as rotas no Thunder Client, siga os passos abaixo:

1. **Criar uma categoria:**

**Método:** POST  
**URL:** http://localhost:3000/categories  
**Body (JSON):**
```
{
  "title": "Salário",
  "color": "#008000"
}
```
2. **Criar uma transação:**

**Método:** POST  
**URL:** http://localhost:3000/transactions  
**Body (JSON):**
```
{
  "title": "Freelance",
  "amount": 200000,
  "date": "2024-03-02",
  "type": "income",
  "categoryId": "id da categoria criada no banco de dados"
}
```
**Obs.:** o valor tem que ser inserido em centavos, ou seja, *10 (no nosso caso, colocamos o valor hipotético ~~usando a Lei da Atração~~ de R$20.000)  

3. **Listar as categorias:**

**Método:** GET   
**URL:** http://localhost:3000/categories  

**4. Listar as transações:**

**Método:** GET   
**URL:** http://localhost:3000/transactions 

### 📌 Conclusão
Esta API fornece uma solução para controle financeiro, com suporte para criação de categorias e transações, listagem e filtragem, armazenamento no MongoDB e fácil setup utilizando Docker. Você pode testar a API via extensão Thunder Client ou com qualquer programa de testagem de rotas, como Insomnia ou Postman.

Se houver qualquer problema ou dúvida, fique à vontade para entrar em contato comigo, seja a partir de uma issue no repositório ou me contactando pelo [LinkedIn](https://www.linkedin.com/in/alineguiseline/)!