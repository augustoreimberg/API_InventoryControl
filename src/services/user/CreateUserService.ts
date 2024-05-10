import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { UserRequest } from "../../models/interfaces/user/UserRequest";
import prismaClient from "../../prisma";

class CreateUserService{

    async execute({ name, email, password }: UserRequest) {
        if (!email) {
            throw new Error("Email incorrect";)
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Email lready exists")
        }

        //encrypting user password
        const passwordHash = await hash(password, 8);
    }
}

export{ CreateUserService }