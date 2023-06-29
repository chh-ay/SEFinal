<script lang="ts">
	import { Input } from '$lib/componenets';

	export let form;
</script>

<h1 class="py-2 text-5xl font-bold">Sign Up</h1>
<p class="text-lg">
	Need an account? <a href="/register" class="font-semibold text-green-600">Create One</a>
</p>
<form action="?/login" method="POST" class="py-12 text-lg">
	<Input
		type="email"
		label="Email"
		id="email"
		class="input {form?.errors?.email ? 'input-error' : 'input-group'}"
		value={form?.data?.email}
	/>
	{#if form?.errors.email}
		<span class="ml-2 text-xs text-error-900">{form?.errors.email}</span>
	{/if}
	<Input
		type="password"
		label="Password"
		id="password"
		class="input {form?.errors?.password ? 'input-error' : 'input-group'}"
		value={form?.data?.password}
	/>
	{#if form?.errors.password}
		<span class="ml-2 text-xs text-error-900">{form?.errors.password[0]}</span>
	{/if}

	<button type="submit" class="my-4 w-full btn variant-filled btn-lg">Sign Up</button>
</form>
<p class="text-md">
	Are you a seller? <a href="/" class="font-semibold text-green-600">Register Here</a>
</p>
