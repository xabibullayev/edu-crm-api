import { Response, Request } from "express";
import Course from "../models/Course";

// GET ALL COURSES 
export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find()

    res.status(200).json(courses)

  } catch(err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
}

// GET A COURSE
export const getCourse = async (req: Request, res: Response) => {
  try {
    const {id} = req.params

    if(!id) {
      return res.status(400).json("Id kiritilmegen!")
    }

    const course = await Course.findById(id)

    res.status(200).json(course)
  } catch(err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
}

// ADD A NEW COURSE 
export const addCourse = async (req: Request, res: Response) => {
  try {
    const {firstname, lastname, phone_number} = req.body;

    if (!firstname || !lastname || !phone_number) {
      return res
        .status(400)
        .json("Iltimas berilgen hamme maydanlardi toldirin!");
    }

    const newCourse = new Course({
      firstname, lastname, phone_number
    });

    await newCourse.save();

    res.status(200).json("Kurs kiritildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// EDIT A COURSE 
export const editCourse = async (res: Response, req: Request) => {
  try {
    const {id} = req.params
    const {body} = req

    if(!id) {
      return res.status(400).json("Id kiritilmegen!")
    }

    if(!body) {
      return res.status(400).json("Taza mag'liwmatlar kiritilmegen!")
    }

    await Course.findByIdAndUpdate(id, {$set: body})

    res.status(200).json("Mag'liwmatlar o'zgertirildi!")

  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// DELETE A COURSE 
export const deleteCourse = async (res: Response, req: Request) => {
  try {
    const {id} = req.params

    if(!id) { 
      return res.status(400).json("Id berilmegen!");
    }

    await Course.findByIdAndRemove(id);

    res.status(200).json("Kurs o'shirildi!")
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
