import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(request: Request, response: Response) {
        const listCategoryService = new ListCategoryService();
        const listedCategory = await listCategoryService.execute();
        return response.json(listedCategory);
    }
}

export { ListCategoryController };
