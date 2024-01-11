import Quotes from "../models/quotes.model.js";

export const getAllQuotes = async (req, res) => {
  try {
    const allQuotes = await Quotes.find();
    if (allQuotes.length === 0) {
      return res.status(404).json({ message: "No quotes found." });
    }
    return res.status(200).send(allQuotes); 
  } catch (error) {
    console.error("Error fetching quote.", error);
    res.status(500).json({ error: "Error fetching quote." });
  }
};

export const addQuotes = async (req, res) => {
  try {
    const {
      requestBy,
      email,
      phone,
      serviceName,
      serviceDate,
      timeSlot,
      message,
    } = req.body;

    const existingQuote = await Quotes.find({
      email,
      phone,
      timeSlot,
      serviceName,
      serviceDate: new Date(serviceDate),
    });

    if (existingQuote.length > 0) {
      return res.status(502).json({ message: "Same quote already submitted." });
    }
    const newQuote = new Quotes({
      requestBy,
      email,
      phone,
      serviceName,
      serviceDate: new Date(serviceDate),
      timeSlot,
      message,
    });
    const addNewQuote = await newQuote.save();
    if (!addNewQuote) {
      return res.status(500).json({ message: "Cannot save new quote." });
    }
    return res.status(200).send(addNewQuote);
  } catch (error) {
    console.error("Error adding new quote.", error);
    res.status(500).json({ error: "Error adding new quote." });
  }
};

export const deleteQuote = async (req, res) => {
  try {
    const deleteQuote = await Quotes.findByIdAndDelete({ _id: req.params.id });
    console.log("deleteQuote",deleteQuote);
    if (!deleteQuote) {
      return res.status(404).json({ message: "No quotes found." });
    }
    return res.status(200).json({message:"Deleted successfully"});
  } catch (error) {
    console.error("Error deleting quote.", error);
    res.status(500).json({ error: "Error deleting quote." });
  }
};
