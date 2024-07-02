import { Router, Request, Response, request } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { EditProductController } from "./controllers/product/EditProductController";
import { ListClassByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { ListProductsController } from "./controllers/product/ListProductsController";
import { RemoveProductController } from "./controllers/product/RemoveProductController";
import { SaleProductController } from "./controllers/sale/SaleProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// User Routes
router.post(
    "/createNewUser", 
    new CreateUserController().handle
);

router.post(
    "/authUser", 
    new AuthUserController().handle
);

router.get(
    "/getUserById", 
    isAuthenticated, 
    new DetailUserController().handle
);

router.delete(
    "/user/remove", 
    new RemoveUserController().handle)
    ;

//Category Routes
router.post(
    "/category",
    isAuthenticated,
    new CreateCategoryController().handle
);
router.put(
    "/category/edit",
    isAuthenticated,
    new EditCategoryController().handle
);

router.get(
    "/category/all",
    isAuthenticated,
    new ListCategoryController().handle
);

router.delete(
    "/category/remove",
    isAuthenticated,
    new RemoveCategoryController().handle
);

//Product Routes
router.post(
    "/product",
    isAuthenticated,
    upload.single("file"),
    new CreateProductController().handle
)

router.put(
    "/product/edit",
    isAuthenticated,
    upload.single("file"),
    new EditProductController().handle
)

router.get(
    "/product/listByCategory",
    isAuthenticated,
    new ListClassByCategoryController().handle
)

router.get(
    "/products",
    isAuthenticated,
    new ListProductsController().handle
)

router.delete(
    "/product/remove",
    isAuthenticated,
    new RemoveProductController().handle
)

router.put(
    "/sale/product",
    isAuthenticated,
    new SaleProductController().handle
)

export { router };
