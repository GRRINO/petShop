import { Router } from "express";
import { getUserProfile, loginController, logoutUser, registerController, updateUserProfile } from "../controllers/UserController";
import { addPet } from "../controllers/PetController";
import { protect } from "../middlewares/authMiddlewares";

const router = Router()
 
router.post('/register',registerController)
router.post('/login',loginController)
router.delete('/logout',logoutUser)
router.route("/update").get(protect,getUserProfile).put(protect,updateUserProfile)


export default router