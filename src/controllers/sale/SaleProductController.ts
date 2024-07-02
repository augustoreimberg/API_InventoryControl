import { Request, Response } from "express";
import { SaleProductService } from "../../services/sale/SaleProductService";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";

class SaleProductController {
    async handle(request: Request, response: Response) {
        const productId = request.query.productId as string
        const { amount }: SaleProductRequest = request.body;

        const saleProductService = new SaleProductService();
        const saleProduct = await saleProductService.execute({ productId, amount });
        return response.json(saleProduct);
    }
}

export { SaleProductController };
