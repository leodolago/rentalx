import { ICategoriesRepository } from '../repository/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error('Category already existis');
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
