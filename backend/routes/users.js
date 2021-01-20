import express from "express";
import { User } from "../models/index.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post("/insert", async (req, res) => {
  const userData = {
    firstName: "Jane",
    lastName: "Doe",
    email: "example2@example.com",
  };
  try {
    const newUser = await User.create(userData);
    return res.json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default router;
