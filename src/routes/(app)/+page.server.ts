import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const profile = await locals.getProfile();

	if (profile === 'user') {
		throw redirect(303, '/');
	} else if (profile === 'shop-owner') {
		throw redirect(303, '/shop-owner/dashboard');
	}
};
