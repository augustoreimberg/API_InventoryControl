import prismaClient from "../../prisma";
import { ProductRequest } from "../../models/interfaces/product/ProductRequest";

class CreateProductService{
    async execute( {name, price, description, banner, categoryId, amount}:ProductRequest ){
        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: categoryId,
                amount: Number(amount),
            }
        })
        return product;
    }
}

export { CreateProductService }