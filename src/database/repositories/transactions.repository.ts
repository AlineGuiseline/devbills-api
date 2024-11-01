import { date } from "zod";
import { IndexTransactionsDTO } from "../../dtos/transactions.dto";
import { Transaction } from "../../entities/transactions.entity";
import { TransactionModel } from "../schemas/transactions.schema";


export class TransactionsRepository {
    constructor(private model: typeof TransactionModel) {}

    async create({
        title, 
        date, 
        amount, 
        type, 
        category
    }: Transaction): Promise<Transaction> {
        const createdTransaction = await this.model.create({
            title,
            date,
            amount,
            type,
            category
        });

        return createdTransaction.toObject<Transaction>();
    }

    async index({ 
        title, 
        categoryId, 
        beginDate, 
        endDate 
    }: IndexTransactionsDTO): Promise<Transaction[]>{
        const whereParams: Record<string, unknown> = {
            ...(title && { title: { $regex: title, $options: 'i'} }),
            ...(categoryId && { 'category._id': categoryId }),
            // só vai filtrar title e categoryId se eles existirem, ou seja, se
            // o usuário estiver realmente querendo filtrar
        };

        if (beginDate || endDate) {
            whereParams.date = {
                ...(beginDate && { $gte: beginDate }),
                ...(endDate && { $lte: endDate }),
            };
        };

        const transactions = await this.model.find(whereParams);

        const transactionsMap = transactions.map(item => 
            item.toObject<Transaction>()
        );

        return transactionsMap;
    }
}