import express from "express"
import { test, adminSignup, adminSignin } from "../controllers/auth.admin.controller.js"

const router = express.Router()

router.get("/", test)
router.post("/auth/signup", adminSignup)
router.post("/auth/signin", adminSignin)



export default router

