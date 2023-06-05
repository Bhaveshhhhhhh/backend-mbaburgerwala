import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  getAdminOrders,
  getMyOrder,
  getOrderDetails,
  paymentVerification,
  placeOrder,
  placeOrderOnline,
  processOrders,
} from "../controllers/order.js";

const router = express.Router();

router.post("/createorder", isAuthenticated, placeOrder);

router.post("/createorderonline", isAuthenticated, placeOrderOnline);

router.post("/paymentverification", isAuthenticated, paymentVerification);

router.get("/myorders", isAuthenticated, getMyOrder);

router.get("/order/:id", isAuthenticated, getOrderDetails);

//add admin middleware

router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);

router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrders);

export default router;
