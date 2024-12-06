import { z } from 'zod';

export const verifyEmailSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
});

export type VerifyEmailSchema = z.infer<typeof verifyEmailSchema>;
