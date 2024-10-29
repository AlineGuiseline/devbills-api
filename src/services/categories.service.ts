import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dtos/categories.dtos";
import { Category } from "../entities/category.entities";

export class CategoriesService {
    constructor(private categoriesRepository: CategoriesRepository){}

    async create({ title, color }: CreateCategoryDTO): Promise<Category> {
        // quando a Promise se resolver, teremos um tipo
        // nesse caso, vai devolver um Category
        const category = new Category({
            title,
            color,
        });

        const createdCategory = await this.categoriesRepository.create(category);

        return createdCategory;
    }
}