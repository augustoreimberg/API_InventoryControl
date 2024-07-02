import prismaClient from "../../prisma";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";

class SaleProductService {
    async execute({ productId, amount }: SaleProductRequest) {
        if (!productId || !amount) {
            throw new Error("missing data");
        }
        const saleProduct = await prismaClient.product.findFirst({
            where: {
                id: productId,
            },
        });

        if (saleProduct?.amount > amount && amount > 0) {
            const newAmount = saleProduct?.amount - amount;
            const saveSale = await prismaClient.product.update({
                where: {
                    id: productId,
                },
                data: {
                    amount: newAmount,
                },
                select: {
                    id: true,
                    name: true,
                    amount: true
                },
            });
            return saveSale;
        } else {
            throw new Error("Unable to complete the sale");
        }
    }
}

export { SaleProductService };
