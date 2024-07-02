import { Request, Response } from "express";
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService";
import { RemoveProductRequest } from "../../models/interfaces/product/RemoveProductRequest";
import { RemoveProductService } from "../../services/product/RemoveProductService";

class RemoveProductController{

    async handle(request: Request, response: Response){

        const {productId}:RemoveProductRequest = request.body

        const removeProductService = new RemoveProductService()
        const removeProduct = await removeProductService.execute({productId})
        return response.json(removeProduct)
    }
}

export { RemoveProductController }