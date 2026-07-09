import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Passcode is required' }),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Passcode must be at least 8 characters' })
    .regex(/[a-zA-Z]/, { message: 'Passcode must contain at least one letter' })
    .regex(/[0-9]/, { message: 'Passcode must contain at least one number' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Passcode must contain at least one special character',
    }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
