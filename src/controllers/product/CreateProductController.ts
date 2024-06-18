import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductervice";
import { ProductRequest } from "../../models/interfaces/product/ProductRequest";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const {
            name,
            price,
            description,
            banner,
            categoryId,
            amount,
        }: ProductRequest = request.body;
        const createProductService = new CreateProductService();

        if (!request.file) {
            throw new Error("Error sending image");
        } else {
            const { originalname, filename: banner } = request.file;
            const product = await createProductService.execute({
                name,
                description,
                price,
                banner,
                categoryId,
                amount,
            });

            return response.json(product);
        }
    }
}

export { CreateProductController };
