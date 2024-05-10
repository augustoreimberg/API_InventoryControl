import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// User Routes
router.post("/createNewUser", new CreateUserController().handle);

export {router};