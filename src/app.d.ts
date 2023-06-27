// See https://kit.svelte.dev/docs/types#app

import type { Database } from '$lib/database';
import type { Session, SupabaseClient } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface Platform {}
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
	}
	declare namespace NodeJS {
		interface Global {
			config: any;
		}
	}
}

export { };
