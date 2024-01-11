import express from "express"
import { addReview, deleteReview, getAllReviews,getOneReview,editReviewStatus,getAllByStatus } from "../controllers/reviews.controller.js"
const router = express.Router()

router.get("/", getAllReviews)
router.get("/get-by-status", getAllByStatus)
router.get("/:id", getOneReview)
router.post("/add-review", addReview)
router.patch("/edit-review/:id", editReviewStatus)
router.delete("/delete-review/:id", deleteReview)


export default router