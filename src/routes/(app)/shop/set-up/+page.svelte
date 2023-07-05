<script lang="ts">
	import nav_logo from '$lib/images/nav_logo.png';
	import default_user from '$lib/images/default_user.jpg';
	import { AppBar, Avatar, Step, Stepper, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const dropDownProfile: PopupSettings = {
		event: 'click',
		target: 'dropDownProfile',
		placement: 'bottom-start'
	};
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><a href="/" class="ml-4 text-xl">Design Studio</a></svelte:fragment>
	<img src={nav_logo} alt="" />
	<svelte:fragment slot="trail">
		<button use:popup={dropDownProfile}>
			<Avatar
				src={default_user}
				border="border-4 border-surface-300-600-token hover:!border-primary-500"
				cursor="cursor-pointer"
				rounded="rounded-full"
				class="mr-4"
			/>
		</button>
	</svelte:fragment>
</AppBar>

<form class="my-12 mx-24">
	<Stepper>
		<Step>
			<svelte:fragment slot="header">(header)</svelte:fragment>
			(content)
		</Step>
		<Step>
			<svelte:fragment slot="header">(header)</svelte:fragment>
			(content)
		</Step>
	</Stepper>
</form>

<div class="py-2 px-4 w-20 shadow-xl card" data-popup="dropDownProfile">
	<form action="/logout" method="POST">
		<button class="hover:underline drop-shadow-xl">Logout</button>
	</form>
</div>
