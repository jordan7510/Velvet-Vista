import express from "express"
import { addQuotes, getAllQuotes,deleteQuote } from "../controllers/quotes.controller.js"
const router = express.Router()

router.get("/", getAllQuotes)
router.post("/", addQuotes)
router.delete("/delete/:id", deleteQuote)



export default router