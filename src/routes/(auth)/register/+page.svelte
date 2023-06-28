<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { Input } from '$lib/componenets';
	import img from '$lib/images/logo.jpg';

	export let data: PageData;

	const { form } = superForm(data.form);
</script>

<div class="flex h-full">
	<div class="basis-2/5 p-32">
		<h1 class="text-5xl font-bold py-2">Sign Up</h1>
		<p class="text-lg">
			Have an account? <a href="/login" class="font-semibold text-green-600">Sign In</a>
		</p>
		<form action="?/register" method="POST" class="text-lg py-8">
			<Input type="text" label="Username" name="username" bind:value={$form.username} />
			<Input type="email" label="Email" name="email" bind:value={$form.email} />
			<Input type="password" label="Password" name="password" bind:value={$form.password} />
			<Input
				type="password"
				label="Confirm Password"
				name="passwordConfirm"
				bind:value={$form.passwordConfirm}
			/>

			<button type="submit" class="btn variant-filled w-full btn-lg my-4">Sign Up</button>
		</form>
		<p class="text-md">
			Are you a seller? <a href="/" class="font-semibold text-green-600">Register Here</a>
		</p>
	</div>
	<div class="basis-3/5">
		<img src={img} class="h-full w-full" alt="" />
	</div>
</div>
