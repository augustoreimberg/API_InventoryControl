import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

// User Routes
router.post("/createNewUser", new CreateUserController().handle);

router.post("/authUser", new AuthUserController().handle);

export {router};