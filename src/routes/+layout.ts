import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { Database } from '$lib/database.type';

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth');

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session
  });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  let profile_type = null;
  if (session) {
    profile_type = session.user.user_metadata.type;
  }

  return { supabase, session, profile_type };
};
