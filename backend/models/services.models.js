import mongoose from "mongoose";

const servicesSchema = mongoose.Schema(
  {
    serviceTitle: {
      type: String,
      required: true,
    },
    serviceDesc: {
      type: String,
      required: true,
    },
    servicePrice: {
      type: Number,
      required: true,
    },
    serviceImage: {
      type: String,
      required: true,
    },
    serviceStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


const Services = mongoose.model("Service",servicesSchema)

export default Services
