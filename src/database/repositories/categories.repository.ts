import { Category } from "../../entities/category.entities";
import { CategoryModel } from "../schemas/category.schema";

export class CategoriesRepository {
    constructor(private model: typeof CategoryModel) {}

    async create({ title, color }: Category): Promise<Category> {
        const createdCategory = await this.model.create({ title, color });

        return createdCategory.toObject<Category>();
    }
}