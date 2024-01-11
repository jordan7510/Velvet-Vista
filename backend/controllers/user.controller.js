import User from "../models/user.models.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcrypt from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "API is working" });
};


export const updateUser = async (req, res, next) => {
  // if ((req.user.id !== req.params.id)) {
  //   return next(errorHandler(401, "You can update only your account."));
  // }

  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture,
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const deleteUser = async(req,res,next)=>{
  if(!req.params.id){
    return next(errorHandler(404, "User not found"))
  }
  try {
        const deleteResult = await User.findByIdAndDelete(req.params.id)
        if(!deleteResult){
          return next(errorHandler(503, "User could not be deleted."))
        }
        res.status(200).json("User deleted successfully.")
  } catch (error) {
    next(errorHandler(error))
  }
}
