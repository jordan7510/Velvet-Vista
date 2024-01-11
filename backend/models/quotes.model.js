import mongoose from "mongoose";

const quotesSchema = mongoose.Schema({
    requestBy:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    serviceName:{
        type: String,
        required: true
    },
    serviceDate:{
        type: Date,
        required: true
    },
    timeSlot:{
        type: String,
        required: true
    },
    message:{
        type: String,
        maxlength: 100,
    }
},
{timestamps: true}

)

const Quotes = mongoose.model("quote",quotesSchema)


export default Quotes