import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { AuthRequest } from "../../models/interfaces/user/auth/AuthRequest";

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        if (!email) {
            throw new Error("Email was not sent");
        }

        if (!password) {
            throw new Error("Password was not sent");
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error("Wrong email or passowrd");
        }

        const passowrdMatch = await compare(password, user?.password);

        if (!passowrdMatch) {
            throw new Error("Wrong password");
        }

        const token = sign(
            {
                name: user?.name,
                email: user?.email,
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "1d",
            }
        );
        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token,
        };
    }
}

export { AuthUserService };
