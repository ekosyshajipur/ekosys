import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters")
    .trim(),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[+]?[\d\s-]{10,15}$/, "Please enter a valid phone number")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be under 100 characters")
    .trim()
    .toLowerCase(),
  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must be under 100 characters")
    .trim()
    .optional()
    .default("Hajipur"),
  enquiryType: z
    .string()
    .min(1, "Please select an enquiry type"),
  requirements: z
    .string()
    .min(5, "Please describe your requirements")
    .max(2000, "Requirements must be under 2000 characters")
    .trim(),
  consent: z.boolean().optional().default(true),
  page: z.string().optional().default("Website"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
