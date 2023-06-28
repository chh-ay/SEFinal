import { registerUserSchema } from '$lib/schemas.js';
import { prisma } from '$lib/server/prisma.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async ({ request, locals }) => {
	const form = await superValidate(request, registerUserSchema);
	const { data, error: err } = await locals.supabase.auth.getSession();

	if (err) {
		throw error(500, err?.message);
	}

	if (data.session) {
		throw redirect(303, '/');
	}

	return { form };
};

export const actions = {
	register: async ({ request, locals }) => {
		const form = await superValidate(await request.formData(), registerUserSchema);
		console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		}

		const { data, error: err } = await locals.supabase.auth.signUp({
			email: form.data.email,
			password: form.data.password,
			options: {
				data: {
					username: form.data.username
				}
			}
		});

		console.log(data);

		if (err) {
			throw error(500, err.message);
		}

		throw redirect(303, '/login');
	}
};
