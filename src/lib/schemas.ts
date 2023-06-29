import { z } from 'zod';

export const registerUserSchema = z
	.object({
		username: z
			.string()
			.min(3, { message: 'Username must contain at least 3 character(s)' })
			.max(50, { message: 'Username must contain at most 50 character(s)' })
			.trim(),
		email: z.string().email().trim(),
		password: z
			.string()
			.min(8, { message: 'Password must contain at least 8 character(s)' })
			.max(24, { message: 'Password must contain at most 24 character(s)' })
			.trim(),
		passwordConfirm: z
			.string()
			.min(8, { message: 'Confirm Password must contain at least 8 character(s)' })
			.max(24, { message: 'Confirm Password must contain at most 24 character(s)' })
			.trim()
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
	email: z.string().email().trim(),
	password: z
		.string()
		.min(8, { message: 'Password must contain at least 8 character(s)' })
		.max(24, { message: 'Password must contain at most 24 character(s)' })
		.trim()
});

export const registerStoreOwnerSchema = z
	.object({
		username: z
			.string()
			.min(3, { message: 'Username must contain at least 3 character(s)' })
			.max(50, { message: 'Username must contain at most 50 character(s)' })
			.trim(),
		email: z.string().email().trim(),
		password: z
			.string()
			.min(8, { message: 'Password must contain at least 8 character(s)' })
			.max(24, { message: 'Password must contain at most 24 character(s)' })
			.trim(),
		passwordConfirm: z
			.string()
			.min(8, { message: 'Confirm Password must contain at least 8 character(s)' })
			.max(24, { message: 'Confirm Password must contain at most 24 character(s)' })
			.trim()
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
