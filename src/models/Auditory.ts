import mongoose from "mongoose";
import { IAuditory } from "../interfaces/Auditory";


const auditorySchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
}, {timestamps: true});

const Auditory = mongoose.model<IAuditory>("Auditory", auditorySchema);

export default Auditory; 
