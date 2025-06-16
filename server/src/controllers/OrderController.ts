import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { Order } from "../models/order";


export const addOrder = async(req:Request,res:Response)=>{
    const {pets,userId} = req.body
    
    try {
        let totalPrice = 0;
        const orderPets = []

        for(const item of pets){
            const pet = await Pet.findById(item.petId)
        if(!pet) { 
            res.status(404).json({message:`Pet not found : ${item.petId}`});
            return;
        }
        if(pet.quantity < item.quantity){
            res.status(400).json({ message: `Not enough stock for ${pet.name}` });
            return
        }

        if (pet.price == null) {
            res.status(400).json({ message: `Price not available for ${pet.name}` });
            return;
        }

        totalPrice += pet.price * item.quantity

        orderPets.push({pet:item.petId,quantity:item.quantity})
        
        pet.quantity -= item.quantity;
        if(pet.quantity === 0 ) pet.available = false;
        await pet.save()

        
        }

        const order = await Order.create({
            user:userId,
            pets:orderPets,
            totalPrice
        })
        
    
        
        res.status(201).json({ message: 'Order placed', order  });
    } catch (error) {
        console.log(error)
    }
}

export const getOrder = async(req:Request,res:Response)=>{
      try {
    const orders = await Order.find()
    .populate("user", "username email") // <- Important
  .populate("pets.pet", "name breed image");;
    res.json({ orderInfo : orders });
  } catch (error) {
    console.log(error);
  }
}

export const getOrdersByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ user: userId })
      .populate("user", "name email")
      .populate("pets.pet", "name breed image price");

    if (orders.length === 0) {
       res.status(404).json({ message: "No orders found for this user." });
    }

    res.json({ orderInfo: orders });
  } catch (error) {
    console.error("Error fetching user's orders:", error);
    res.status(500).json({ message: "Server error", error });
  }
};




// PATCH /order/:id - update order status
export const updateOrder =  async (req:Request, res:Response) => {
  const { id } = req.params;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status: "completed" },
      { new: true }
    );

    if (!updatedOrder) {
       res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
}



