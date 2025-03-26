import express from "express";
import { createOrder } from "../Controller/OrderController.js";


const OrderRouter=express.Router();

OrderRouter.post("/",createOrder);




export default OrderRouter;