import Appointments from "../models/appointments.model.js";
import Services from "../models/services.models.js";


export const getAllAppointments = async (req, res) => {
    try {
      const getAllAppointments = await Appointments.find();
      if (getAllAppointments.length === 0) {
        return res.status(404).send({ message: "No appointments found." });
      }
      return res.status(200).send(getAllAppointments); 
    } catch (error) {
      console.error("Error fetching appointments.", error);
      res.status(500).json({ error: "Error fetching appointments." });
    }
  };

  export const getAllById = async (req, res) => {
    try {
      const getAppointment = await Appointments.find({userId:req.params.id});
      if (getAppointment.length === 0) {
        return res.status(404).send({ message: "No appointments found." });
      }
      return res.status(200).send(getAppointment); 
    } catch (error) {
      console.error("Error fetching appointments.", error);
      res.status(500).json({ error: "Error fetching appointments." });
    }
  };




export const addAppointment = async (req, res) => {
  try {
    const {
      fullName,
      userId,
      email,
      serviceId,
      serviceDate,
      timeSlot,
      paymentOption,
    } = req.body;

    const existingAppointment = await Appointments.find({
      email,
      timeSlot,
      serviceId,
      serviceDate: new Date(serviceDate),
    });

    if (existingAppointment.length > 0) {
      return res
        .status(502)
        .json({ message: "Same appointment already made." });
    }

    const serviceDetails = await Services.findOne({_id:serviceId})

    const newAppointment = new Appointments({
      fullName,
      userId,
      email,
      serviceId,
      serviceDetails:serviceDetails,
      serviceDate: new Date(serviceDate),
      timeSlot,
      paymentOption,
    });
    const addNewAppointment = await newAppointment.save();
    if (!addNewAppointment) {
      return res.status(500).json({ message: "Cannot save new appointment." });
    }
    return res.status(200).send(addNewAppointment);
  } catch (error) {
    console.error("Error adding new appointment.", error);
    res.status(500).json({ error: "Error adding new appointment." });
  }
};




  export const editAppointment = async (req, res) => {
    try {
      const id = req.params.id;
      const editResult = await Appointments.findByIdAndUpdate(id, req.body, {new:true});
  
      if (!editResult) {
        return res.status(400).json({ message: "No appointment found" });
      }
      res.status(200).json(editResult);
    } catch (error) {
      console.error("Error updating appointment", error);
      res.status(402).json({ message: "error while updating appointment", error });
    }
  };


export const deleteAppointment = async (req, res) => {
    try {
      const deleteId = req.params.id;
      const deleteAppointment = await Appointments.findByIdAndDelete(deleteId);
      if (!deleteAppointment) {
        return res.status(404).json({ message: "No appointments found." });
      }
      return res.status(200).json({message:"Deleted successfully"});
    } catch (error) {
      console.error("Error deleting appointment.", error);
      res.status(500).json({ error: "Error deleting appointment." });
    }
  };
  