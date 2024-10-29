// são basicamente os modelos do documentos do Mongo
// o Mongo trabalha na estrutura: Collections e Documents
// onde as Collections é como se fossem tabelas
// e os Documents são como se fossem as linhas das tabelas
// o Schema define o modelo para facilitar para a nossa
// aplicação, mas o Mongo não necessita que você tenha
// o modelo do documento. Você pode criar documentos (registros)
// lá dentro de estruturas comepltamente diferentes, mas como
// queremos algo estruturado, vamos criar schemas
import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
    title: String,
    color: String
}, { versionKey: false});

export const CategoryModel = mongoose.model('Category', CategorySchema);

// REPOSITORY PATTERN é uma camada a mais na aplicação que é responsável por toda
// e qualquer manipulação de dados externos (não só para banco de dados, mas para APIs também)
// nós já temos 4 camadas: ENTITY (mais interna) -> SERVICE -> CONTROLLER -> ROUTE (mais externa)
