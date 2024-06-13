import { Request, Response, request } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(request: Request, response: Response) {
        const userId = request.params.userId;
        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(userId)
        return response.json(user);
    }
}

export { DetailUserController }
