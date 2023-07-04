export const load = async ({ locals: { getSession, getProfile } }) => {
	return {
		session: await getSession(),
		profile_type: await getProfile()
	};
};
