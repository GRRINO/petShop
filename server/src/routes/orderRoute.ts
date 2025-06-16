import { Router } from "express";
import { registerController } from "../controllers/UserController";
import { addPet } from "../controllers/PetController";
import { addOrder, getOrder, getOrdersByUser, updateOrder } from "../controllers/OrderController";

const router = Router()
 
router.post('/order',addOrder)
router.get('/order',getOrder)
router.get('/order/:userId',getOrdersByUser)
router.patch('/order/:id',updateOrder)

export default router