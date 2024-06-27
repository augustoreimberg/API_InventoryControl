import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../services/product/ListProductByCategoryService";

class ListClassByCategoryController {
    async handle(request: Request, response: Response){
        const categoryId = request.query.categoryId as string;
        const listProductByCategoryService = new ListProductByCategoryService();

        const products = await listProductByCategoryService.execute({categoryId})
        return response.json(products)

    }
}

export { ListClassByCategoryController };
