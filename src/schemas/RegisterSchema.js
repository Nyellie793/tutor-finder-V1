import * as z from "zod";

// Define constants for image validation
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const registerSchema = z
  .object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    password_confirmation: z
      .string()
      .min(1, { message: "Please confirm your password" }),
    phone_number: z
      .string()
      .max(12, { message: "Phone number must not exceed 12 characters" }),
    whatsapp_number: z
      .string()
      .max(12, { message: "WhatsApp number must not exceed 12 characters" }),
    user_type: z.string().refine((val) => ["tutor", "learner"].includes(val), {
      message: "User type must be either 'tutor' or 'learner'",
    }),
    location: z.string().min(1, { message: "Location is required" }),
    profile_image: z
      .instanceof(File)
      .optional()
      .refine((file) => !file || file.size <= MAX_FILE_SIZE, {
        message: "Profile image must not exceed 2MB",
      })
      .refine((file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Accepted image formats: .jpg, .jpeg, .png, .webp",
      }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });
