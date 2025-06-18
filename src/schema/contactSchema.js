// src/schema/contactSchema.js
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.string().email("Ugyldig e-mail"),
  subject: z.string().min(3, "Emne skal være mindst 3 tegn"),
  message: z.string().min(10, "Besked skal være mindst 10 tegn"),
});