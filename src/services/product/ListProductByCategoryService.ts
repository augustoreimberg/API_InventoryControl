import { ListProductByCategoryRequest } from "../../models/interfaces/product/ListProductByCategoryRequest";
import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

class ListProductByCategoryService {
    async execute({ categoryId }: ListProductByCategoryRequest) {
        const findProductByCategoryId = await prismaClient.product.findMany({
            where: {
                category_id: categoryId,
            },
        });

        return findProductByCategoryId;
    }
}

export { ListProductByCategoryService };
