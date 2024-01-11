import express from "express"
import { addAppointment, deleteAppointment, editAppointment, getAllAppointments,getAllById } from "../controllers/appointments.controller.js"

const router = express.Router()

router.get("/", getAllAppointments)
router.get("/:id", getAllById)
router.post("/", addAppointment)
router.delete("/delete/:id", deleteAppointment)
router.patch("/edit/:id", editAppointment)



export default router