import { z } from "zod";

// Define the Zod schema for form validation
export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message:"Phone must be at least 2 characters.x"
  })
});