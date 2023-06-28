<script lang="ts">
	import '../theme.postcss';
	import '../app.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<!-- (header) -->
<!-- (sidebarLeft) -->
<!-- (pageHeader) -->
<!-- Router Slot -->
<slot />
<!-- ---- / ---- -->
<!-- (pageFooter) -->
<!-- (footer) -->
