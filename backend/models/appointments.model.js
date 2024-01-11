import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userId: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    serviceId: {
        type: String,
        required: true,
      },
      serviceDetails: {
        type: Object,
      },
    serviceDate: {
      type: Date,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
    paymentOption: {
      type: String,
      required: true,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    isDone: {
        type: Boolean,
        default: false,
      },
  },
  { timestamps: true }
);

const Appointments = mongoose.model("appointment", appointmentSchema);

export default Appointments;
