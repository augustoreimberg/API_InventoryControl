import prismaClient from "../../prisma";

class DetailUserService {
    async execute(userId: string) {
        if (userId) {
            const user = await prismaClient.user.findUnique({
                where: {
                    id: userId,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            });
            return user;
        }
    }
}

export { DetailUserService };
