import { Request, Response } from "express";
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";
import { EditCategoryService } from "../../services/category/EditCategoryService";

class EditCategoryController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const categoryId = request.query.categoryId as string;
        const editCategoryService = new EditCategoryService();
        const categoryEdited = editCategoryService.execute({
            name,
            categoryId,
        });
        return response.json(categoryEdited);
    }
}

export { EditCategoryController };
