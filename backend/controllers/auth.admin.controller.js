import User from "../models/user.models.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json("Admin route working");
};

export const adminSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const emailResult = await User.findOne({ email: email });
   
    if (emailResult) {
      return res.json({ success: false, message: "Email already registered" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newAdmin = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: true,
    });
    const result = await newAdmin.save();
    res.status(200) .json({ success: true, message: "Admin created successfully" });
  } catch (error) {
    next(errorHandler(403, "Error admin create"));
  }
};


export const adminSignin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validAdmin = await User.findOne({ email: email });
    if (!validAdmin) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = bcryptjs.compareSync(password, validAdmin.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const { password: Hashed_Password, ...rest } = validAdmin._doc;
    res.status(200).json(rest);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error finding email", error);
  }
};

