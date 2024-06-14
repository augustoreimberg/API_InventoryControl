import prismaClient from "../../prisma";
import { RemoveUserRequest } from "../../models/interfaces/user/auth/RemoveUserRequest";

class RemoveUserService {
    async execute({ userId }: RemoveUserRequest) {
        if (userId) {
            const removeUser = await prismaClient.user.delete({
                where: {
                    id: userId,
                },
            });
            return removeUser
        }
    }
}

export { RemoveUserService };
