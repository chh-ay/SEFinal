<script lang="ts">
	import { Button, Input } from '$lib/componenets';

	export let form;
</script>

<h1 class="py-2 text-5xl font-bold">Sign Up</h1>
<p class="text-lg">
	Need an account? <a href="/register" class="font-semibold text-green-600">Create One</a>
</p>
<form action="?/login" method="POST" class=" text-lg">
	<Input
		type="email"
		label="Email"
		id="email"
		class="input input-bordered w-full {form?.errors?.email ? 'input-error' : ''}"
		value={form?.data?.email}
	/>
	{#if form?.errors.email}
		<span class="ml-2 text-xs text-error">{form?.errors.email}</span>
	{/if}
	<Input
		type="password"
		label="Password"
		id="password"
		class="input input-bordered w-full  {form?.errors?.password ? 'input-error' : ''}"
		value={form?.data?.password}
	/>
	{#if form?.errors.password}
		<span class="ml-2 text-xs text-error">{form?.errors.password[0]}</span>
	{/if}
	<Button btn="Login" />
	<p class="text-sm">
		Are you a seller? <a href="/shop-owner/register" class="font-semibold text-green-600"
			>Register Here</a
		>
	</p>
</form>
