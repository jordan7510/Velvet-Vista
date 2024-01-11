import express from "express"
import { checkEmail,google,signin, signup,signout } from "../controllers/auth.controller.js";
import checkAuthMiddleware from "../middleware/checkAuthMiddleware.js";

const router = express.Router();
router.post("/signup",signup)
// router.post("/check-phone",checkPhone)
router.post("/check-email",checkEmail)
router.post("/signin",signin)
router.post("/checkAuth",checkAuthMiddleware)
router.post("/google", google)
router.get("/signout", signout)


export default router
