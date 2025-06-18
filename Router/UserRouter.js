import express from "express";
import { getAllUsers, LoginUser, reqestUser } from "../Controller/UserController.js";

const userRouter=express.Router();

userRouter.post("/",reqestUser);
userRouter.post("/user",LoginUser);
userRouter.get("/",getAllUsers);



export default userRouter;