import { z } from 'zod';

export const registerUserSchema = z
	.object({
		username: z.string().min(3).max(50).trim(),
		email: z.string().email().max(50).trim(),
		password: z.string().min(8).max(24).trim(),
		passwordConfirm: z.string().min(8).max(24).trim()
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['passwordConfirm']
			});
		}
	});

export const loginUserSchema = z.object({
	email: z.string().min(3).max(50).trim(),
	password: z.string().min(8).max(24).trim()
});
