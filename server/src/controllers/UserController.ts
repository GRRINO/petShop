import { Request, Response } from "express";
import { User } from "../models/user";
import generateToken from "../utils/generateToken";
import asyncHandler from "../utils/asyncHandler";
import { AuthRequest } from "../middlewares/authMiddlewares";

export const registerController = async (req: Request, res: Response) => {
  const { username, email, password, adminSecret } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("Email is already exist");
  }

  const role = adminSecret === process.env.ADMIN_SECRET ? "admin" : "customer";

  const user = await User.create({
    username,
    email,
    password,
    role,
  });

  if (user) {
    res.status(200).json({
      user,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser && (await existingUser.matchPassword(password))) {
    generateToken(res, existingUser._id);
    res.status(200).json({
      _id: existingUser._id,
      name: existingUser.username,
      email: existingUser.email,
      role: existingUser.role,
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
};

export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "User logout" });
});

export const getUserProfile = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const user = {
      _id: req.user?._id,
      name: req.user?.name,

      email: req.user?.email,
      role:req.user?.role,
    };
    res.status(200).json(user);
  }
);

export const updateUserProfile = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const user = await User.findById(req.user?._id);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.role = req.body.role || user.role;
    const updatedUser = await user.save();

    const selectedUser = {
      _id: updatedUser._id,
      name: updatedUser.username,

      email: updatedUser.email,
      role: updatedUser.role,
    };

    res.status(200).json(selectedUser);
  }
);
