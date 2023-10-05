import { Document } from "mongoose";

export interface IStudent extends Document {
  firstname: string,
  lastname: string,
  phone_number: string,
}
