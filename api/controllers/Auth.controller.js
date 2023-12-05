import bcrytjs from "bcryptjs";
import jwt from "jsonwebtoken";
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

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, "User not found!"));
        }
        const validPassword = bcrytjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Wrong cridential!"));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...userData } = validUser._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(userData);
    } catch (error) {
        next(error);
    }
}