import prismaClient from "../../prisma";
import { EditProductRequest } from "../../models/interfaces/product/EditProductRequest";

class EditProductService{
    async execute({name, price, description, banner, productId, amount}:EditProductRequest){
        const productEdited = await prismaClient.product.update({
            where: {
                id: productId
            },
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                amount: Number(amount),
            }
        })
        return productEdited;
    }
}

export { EditProductService }