import bcrytjs from "bcryptjs";
import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrytjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json("User created successfully!");
    } catch (error) {
        next(error);
    }
};