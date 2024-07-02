import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController {
    async handle(request: Request, response: Response) {
        const userId = request?.query.userId as string;
        const removeUserService = new RemoveUserService();
        const removeUser = await removeUserService.execute({ userId });
        return response.json(removeUser);
    }
}

export { RemoveUserController };
