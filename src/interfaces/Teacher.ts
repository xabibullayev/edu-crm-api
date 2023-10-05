import { Document } from "mongoose";

export interface ITeacher extends Document {
  firstname: string,
  lastname: string,
  phone_number: string,
}
