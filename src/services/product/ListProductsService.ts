import prismaClient from "../../prisma";

class ListProductsService {
    async execute() {
        const findProducts = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                amount: true,
            },
            orderBy: {
                created_at: "desc",
            },
        });
        return findProducts
    }
}

export { ListProductsService };
