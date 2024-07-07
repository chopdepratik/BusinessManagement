import express from "express"
import { loginUser } from "../controller/auth.controller.js";
import { isLogin } from "../controller/auth.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

import {getAllUsers,registerUser} from "../controller/auth.controller.js";

const router = express.Router();

router.route("/getUsers").get(getAllUsers);
router.route("/login").post(loginUser);
router.route("/isLogin").get(isAuthenticated, isLogin);
router.route("/register").post(registerUser);

export default router;

