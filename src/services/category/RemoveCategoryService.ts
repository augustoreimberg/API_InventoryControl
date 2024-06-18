import prismaClient from "../../prisma";
import { RemoveCategoryInterface } from "../../models/interfaces/category/RemoveCategoryRequest";

class RemoveCategoryService {
    async execute({ categoryId }: RemoveCategoryInterface) {
        const category = await prismaClient.category.delete({
            where: {
                id: categoryId,
            },
        });
        return category;
    }
}

export { RemoveCategoryService };
