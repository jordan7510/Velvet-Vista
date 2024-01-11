import Service from "../models/services.models.js";

export const getAllServices = async (req, res) => {
  try {
    const result = await Service.find();
    if (!result || result.length === 0) {
      return res.json(result);
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(400).json({ message: "Error fetching services", error });
    console.error("Error fetching services", error);
  }
};

export const getAllByStatus = async (req, res) => {
  try {
    const result = await Service.find({serviceStatus: true});
    if (!result || result.length === 0) {
    return res.status(400).json({"message": "No active services found"});
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(400).json({ message: "Error fetching active services", error });
    console.error("Error fetching active services", error);
  }
};


export const addService = async (req, res) => {
  try {
    const { serviceTitle, serviceDesc, servicePrice, serviceImage } = req.body;
    const newService = new Service({
      serviceTitle,
      serviceDesc,
      servicePrice,
      serviceImage,
    });
    const addNewService = await newService.save();

    if (!addNewService) {
      return res.status(400).json({ message: "Could not add new service" });
    }
    res.status(200).json({ success: true, addNewService });
  } catch (error) {
    res.status(400).json({ message: "error adding new service", error });
    console.error("error adding new service", error);
  }
};

export const editService = async (req, res) => {
  try {
    const editService = await Service.findByIdAndUpdate(
      req.params.id, req.body ,{ new: true }
    );

    if (!editService) {
      return res.status(400).json({ message: "Could not update service" });
    }
    res.status(200).json({ success: true, editService });
  } catch (error) {
    res.status(400).json({ message: "error updating service", error });
    console.error("error updating service", error);
  }
};

export const deleteService = async (req, res) => {
    try {
      const deleteService = await Service.findByIdAndDelete(
        req.params.id,
       );
      if (!deleteService) {
        return res.status(400).json({ message: "Could not delete service" });
      }
      res.status(200).json({ success: true, deleteService });
    } catch (error) {
      res.status(400).json({ message: "error deleting service", error });
      console.error("error deleting service", error);
    }
  };
  
