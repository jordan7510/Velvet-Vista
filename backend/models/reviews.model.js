import mongoose, { Mongoose } from "mongoose";

const reviewsSchema = mongoose.Schema(
  {
    reviewTitle: {
      type: String,
      required: true,
    },
    reviewMsg: {
      type: String,
      required: true,
    },
    reviewRating: {
      type: Number,
      required: true,
    },
    reviewBy: {
      type: String,
      required: true,
    },
    reviewByID: {
        type: String,
        required: true,
      },
      reviewStatus: {
        type: Boolean,
        default: false,
      },
  },
  { timestamps: true }
);


const Reviews = mongoose.model("review",reviewsSchema);

export default Reviews