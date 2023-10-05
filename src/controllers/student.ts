import { Response, Request } from "express";
import Student from "../models/Student";

// GET ALL STUDENTS 
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find()

    res.status(200).json(students)

  } catch(err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
}

// GET A STUDENT
export const getStudent = async (req: Request, res: Response) => {
  try {
    const {id} = req.params

    if(!id) {
      return res.status(400).json("Id kiritilmegen!")
    }

    const student = await Student.findById(id)

    res.status(200).json(student)
  } catch(err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
}

// ADD A NEW STUDENT 
export const addStudent = async (req: Request, res: Response) => {
  try {
    const {firstname, lastname, phone_number} = req.body;

    if (!firstname || !lastname || !phone_number) {
      return res
        .status(400)
        .json("Iltimas berilgen hamme maydanlardi toldirin!");
    }

    const newStudent = new Student({
      firstname, lastname, phone_number
    });

    await newStudent.save();

    res.status(200).json("Student kiritildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// EDIT A STUDENT 
export const editStudent = async (res: Response, req: Request) => {
  try {
    const {id} = req.params
    const {body} = req

    if(!id) {
      return res.status(400).json("Id kiritilmegen!")
    }

    if(!body) {
      return res.status(400).json("Taza mag'liwmatlar kiritilmegen!")
    }

    await Student.findByIdAndUpdate(id, {$set: body})

    res.status(200).json("Mag'liwmatlar o'zgertirildi!")

  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// DELETE A STUDENT 
export const deleteStudent = async (res: Response, req: Request) => {
  try {
    const {id} = req.params

    if(!id) { 
      return res.status(400).json("Id berilmegen!");
    }

    await Student.findByIdAndRemove(id);

    res.status(200).json("Student o'shirildi!")
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
