import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import jwt from "jsonwebtoken";

//REGISTER
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    //validation
    if (!username || !password) {
      return res.status(400).json("Please enter all requirement fields!");
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json("This user is already exist!");
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashingPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashingPassword,
    });

    await newUser.save();

    //response to client
    res.status(200).json("User has been created!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

//LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    //validation
    if (!username || !password) {
      return res.status(400).json("Please enter all requirement fields!");
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(403).json("Login or password is incorrect!");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(403).json("Login or password is incorrect!");
    }

    //generate token
    const jwt_secret = process.env.JWT_SECRET;
    if (!jwt_secret) {
      return res.status(500).json("Server error");
    }

    const token = jwt.sign(
      {
        username: user.username,
      },
      jwt_secret
    );

    res
      .status(200)
      .json({ message: "User has been logged in!", user: { token } });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

export const logggedIn = async (req: Request, res: Response) => {
  console.log("fsadfsda");
  try {
    const token = req.cookies.acces_token;

    if (!token) {
      return res.json(false);
    }

    if (process.env.JWT_SECRET) {
      jwt.verify(token, process.env.JWT_SECRET);

      res.send(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    res.json(false);
  }
};
