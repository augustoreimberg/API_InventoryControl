import prismaClient from "../../prisma";
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";

class EditCategoryService {
    async execute({ name, categoryId }: EditCategoryRequest) {
        if (name === " " || !name) {
            throw new Error("Invalid name to edit category");
        }
        if (categoryId === " " || !categoryId) {
            throw new Error("Invalid id to edit category");
        }

        const productEdited = await prismaClient.category.update({
            where: {
                id: categoryId,
            },
            data: {
                name: name,
            },
        });
        return productEdited;
    }
}

export { EditCategoryService };
