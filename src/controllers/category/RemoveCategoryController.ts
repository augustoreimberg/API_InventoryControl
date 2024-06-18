import { Request, Response } from "express";
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService";

class RemoveCategoryController {
    async handle(request: Request, response: Response) {
        const categoryId = request.query.categoryId as string;
        const removeCategoryService = new RemoveCategoryService();
        const categoryRemove = await removeCategoryService.execute({
            categoryId
        });
        return response.json({ message: "Category deleted successfully!" });
    }
}

export { RemoveCategoryController };
