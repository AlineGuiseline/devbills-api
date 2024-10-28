// responsável por configurar o mongoose/banco de dados
import mongoose from "mongoose";

export async function setupMongo():Promise<void> {
// tudo que faz chamada externa, é uma promise e a função precisa ser async
    try {
        if(mongoose.connection.readyState === 1){
            return;
        }

        console.log('🎲 Connecting to DB...');
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('✔ DB Connected!');
    } catch {
        throw new Error('❌ DB not connected.');
    }
}