import express from "express";
import { getCar, createCar, getCarById } from "../controllers/CarController.js";
import {
  createRent,
  getRent,
  getRentById,
} from "../controllers/RentControllers.js";

const router = express.Router();

router.get("/car", getCar);
router.post("/createcar", createCar);
router.get("/car/:carId", getCarById);
router.get("/rent", getRent);
router.post("/createrent", createRent);
router.get("/rent/:rentId", getRentById);

export default router;
