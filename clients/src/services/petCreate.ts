import * as z from "zod"

export const petCreateSchema = z.object({

    name: z.string().min(3,{message:"Name must contain at least 3 character"}).trim(),
    breed: z.string().nonempty(),
    
    image: z.string().nonempty(),
    age : z.coerce.number().int().min(0).max(150),
    price : z.coerce.number().int().min(0),
    description: z.string().nonempty(),
    category: z.string().nonempty(),

})