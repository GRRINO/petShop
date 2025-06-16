import * as z from "zod"

export const registerSchema = z.object({
    username: z.string().min(3,{message:"Name must contain at least 3 character"}).trim(),
    email: z.string().email().nonempty(),
    password: z.string().min(8,{message:"Password must contain at least 8 characters"}),
    adminSecret:z.string()
})