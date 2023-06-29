import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.supabase.auth.signOut();
	if (err) {
		throw error(500, err.message);
	}
	throw redirect(303, '/login');
};
