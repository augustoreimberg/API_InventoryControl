import prismaClient from "../../prisma";
import { RemoveProductRequest } from "../../models/interfaces/product/RemoveProductRequest";

class RemoveProductService {
    async execute({productId}: RemoveProductRequest){
        if(!productId) {
            throw new Error("Product id is missing");
        }

        const removeProduct = await prismaClient.product.delete({
            where: {
                id: productId
            },
        })
        return removeProduct
    }
}

export { RemoveProductService };
