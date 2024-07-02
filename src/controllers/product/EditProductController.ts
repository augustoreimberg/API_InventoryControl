import { Request, Response } from "express";
import { EditProductService } from "../../services/product/EditProductService";
import { EditProductRequest } from "../../models/interfaces/product/EditProductRequest";

class EditProductController {
    async handle(request: Request, response: Response) {
        const {
            name,
            price,
            description,
            banner,
            productId,
            amount,
        }: EditProductRequest = request.body;
        const editProductService = new EditProductService();
        const productEdited = await editProductService.execute({
            name,
            price,
            description,
            banner,
            productId,
            amount,
        });
        return response.json(productEdited);
    }
}

export { EditProductController };
