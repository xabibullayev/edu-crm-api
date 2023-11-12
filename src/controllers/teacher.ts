import { Response, Request } from "express";
import Teacher from "../models/Teacher";

// GET ALL TEACHERS
export const getTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await Teacher.find();

    res.status(200).json(teachers);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// GET A TEACHER
export const getTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    const teacher = await Teacher.findById(id);

    res.status(200).json(teacher);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// ADD A NEW TEACHER
export const addTeacher = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, phoneNumber } = req.body;

    if (!firstname || !lastname || !phoneNumber) {
      return res
        .status(400)
        .json("Iltimas berilgen hamme maydanlardi toldirin!");
    }

    const newTeacher = new Teacher({
      firstname,
      lastname,
      phoneNumber,
    });

    await newTeacher.save();

    res.status(200).json("Mug'allim kiritildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// EDIT A TEACHER
export const editTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    if (!body) {
      return res.status(400).json("Taza mag'liwmatlar kiritilmegen!");
    }

    await Teacher.findByIdAndUpdate(id, { $set: body });

    res.status(200).json("Mag'liwmatlar o'zgertirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// DELETE A TEACHER
export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id berilmegen!");
    }

    await Teacher.findByIdAndRemove(id);

    res.status(200).json("Mug'allim o'shirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
