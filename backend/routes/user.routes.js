import express from "express"
import { test, updateUser,deleteUser } from "../controllers/user.controller.js"
import { verifyToken } from "../utils/verifyToken.js"
const router = express.Router()

// router.get('/', test)
// router.post('/update/:id', verifyToken, updateUser)
router.post('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router