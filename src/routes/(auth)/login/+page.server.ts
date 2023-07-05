import { loginUserSchema } from '$lib/schemas';
import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

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
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		const { data, error: err } = await locals.supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password
		});

		if (err) {
			throw error(500, err.message);
		}

		if (data.user.user_metadata.type === 'shop-owner') {
			const users = await prisma.shopOwner.findMany({
				where: {
					username: data.user.user_metadata.username
				}
			});

			if (users) {
				const shop = await prisma.shop.findUnique({
					where: {
						id: users[0].id
					}
				});
				if (!shop) {
					throw redirect(303, '/shop/set-up');
				} else {
					throw redirect(303, '/shop-owner/dashboard');
				}
			}
		} else {
			throw redirect(303, '/');
		}
	}
};
