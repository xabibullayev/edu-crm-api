import mongoose from "mongoose";
import { IGroup } from "../interfaces/Group";

const groupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
    auditoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    students: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Group = mongoose.model<IGroup>("Group", groupSchema);

export default Group;
