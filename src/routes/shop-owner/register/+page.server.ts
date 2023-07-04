import { registerStoreOwnerSchema } from '$lib/schemas.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { profileType } from '$lib/constant';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { data, error: err } = await locals.supabase.auth.getSession();

	if (err) {
		throw error(500, err?.message);
	}

	if (data.session) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			registerStoreOwnerSchema
		);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		const { data, error: err } = await locals.supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
			options: {
				data: {
					username: formData.username,
					address: formData.address,
					type: profileType.SHOPOWNER
				}
			}
		});

		if (err) {
			throw error(500, err.message);
		}

		throw redirect(303, '/login');
	}
};
