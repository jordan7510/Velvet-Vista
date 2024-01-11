import express from "express"
import { addService,getAllByStatus, deleteService, editService, getAllServices } from "../controllers/services.controller.js"

const router = express.Router()

router.get("/", getAllServices)
router.get("/get-by-status", getAllByStatus)
router.post("/add-service", addService)
router.put("/edit-service/:id", editService)
router.delete("/delete-service/:id", deleteService)



export default router