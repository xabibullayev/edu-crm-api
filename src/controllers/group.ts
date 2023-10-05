import { Response, Request } from "express";
import Group from "../models/Group";

// GET ALL GROUPS 
export const getGroups = async (req: Request, res: Response) => {
  try {
    const groups = await Group.find()

    res.status(200).json(groups)

  } catch(err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
}

// GET A GROUP
export const getGroup = async (req: Request, res: Response) => {
  try {
    const {id} = req.params

    if(!id) {
      return res.status(400).json("Id kiritilmegen!")
    }

    const group = await Group.findById(id)

    res.status(200).json(group)
  } catch(err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
}

// ADD A NEW GROUP 
export const addGroup = async (req: Request, res: Response) => {
  try {
    const {firstname, lastname, phone_number} = req.body;

    if (!firstname || !lastname || !phone_number) {
      return res
        .status(400)
        .json("Iltimas berilgen hamme maydanlardi toldirin!");
    }

    const newGroup = new Group({
      firstname, lastname, phone_number
    });

    await newGroup.save();

    res.status(200).json("Gruppa kiritildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// EDIT A GROUP 
export const editGroup = async (res: Response, req: Request) => {
  try {
    const {id} = req.params
    const {body} = req

    if(!id) {
      return res.status(400).json("Id kiritilmegen!")
    }

    if(!body) {
      return res.status(400).json("Taza mag'liwmatlar kiritilmegen!")
    }

    await Group.findByIdAndUpdate(id, {$set: body})

    res.status(200).json("Mag'liwmatlar o'zgertirildi!")

  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// DELETE A GROUP 
export const deleteGroup = async (res: Response, req: Request) => {
  try {
    const {id} = req.params

    if(!id) { 
      return res.status(400).json("Id berilmegen!");
    }

    await Group.findByIdAndRemove(id);

    res.status(200).json("Gruppa o'shirildi!")
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
