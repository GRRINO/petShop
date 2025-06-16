import { Router } from "express";
import { registerController } from "../controllers/UserController";
import { addPet, deletePet, getPets } from "../controllers/PetController";

const router = Router()
 
router.post('/petCreate',addPet)
router.get('/getPets',getPets)
router.delete('/deletePets/:id',deletePet)

export default router