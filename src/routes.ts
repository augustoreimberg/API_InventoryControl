import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

// User Routes
router.post("/createNewUser", new CreateUserController().handle);

router.post("/authUser", new AuthUserController().handle);

router.get("/getUserById", isAuthenticated, new DetailUserController().handle);

router.delete("/user/remove", new RemoveUserController().handle)

//Category Routs
router.post("/createCategory", isAuthenticated, new CreateCategoryController().handle)

export { router };
