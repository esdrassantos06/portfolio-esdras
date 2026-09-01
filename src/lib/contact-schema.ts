import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(120)
    .transform((value) => value.replace(/[\r\n]+/g, " ")),
  email: z.string().trim().pipe(z.email().max(254)),
  message: z.string().trim().min(10).max(5000),
  company: z.string().optional(),
});

export type ContactInput = z.input<typeof contactSchema>;
