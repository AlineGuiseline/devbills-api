import { Category } from "../entities/category.entities";
export class CategoriesService {
    async create (): Promise<Category> {
        // quando a Promise se resolver, teremos um tipo
        // nesse caso, vai devolver um Category
        const category = new Category({
            title: 'Example category',
            color: '#ff33bb',
        });

        return category;
    }
}