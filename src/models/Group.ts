import mongoose from "mongoose";
import { IGroup } from "../interfaces/Group";

const groupSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  
}, {timestamps: true});

const Group = mongoose.model<IGroup>("Group", groupSchema);

export default Group; 
