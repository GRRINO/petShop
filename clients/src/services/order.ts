import { z } from "zod";

export const orderSchema = z.object({
  user: z.string().min(1),
  pets: z.array(z.object({
    pet: z.string().min(1),
    quantity: z.number().min(1),
  })),
  totalPrice: z.number().nonnegative(),
});