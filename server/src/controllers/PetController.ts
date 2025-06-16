import { Request, Response } from "express";
import { Pet } from "../models/pet";

export const addPet = async(req:Request,res:Response)=>{
    const{name,age,breed,price,category,image,description} = req.body

    const pet = await Pet.create({
        name,
        age,
        breed,
        price,
        category,
        image,
        description,
    })

    if(pet){
        res.status(200).json({
            pet
        })
    } else {
        res.status(400)
        throw new Error("Something went wrong")
    }
}

export const getPets =async(req:Request,res:Response)=>{
    
    try {
    const pets = await Pet.find();
    res.json({ petInfo: pets });
  } catch (error) {
    console.log(error);
  }
}

export const deletePet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedPet = await Pet.findByIdAndDelete(id);

    if (!deletedPet) {
       res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json({ message: "Pet deleted successfully", deletedPet });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error" });
  }
};