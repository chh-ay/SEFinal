<script lang="ts">
	import { Input, Button } from '$lib/componenets';
	export let form;
</script>

<h1 class="py-2 text-5xl font-bold">Sign Up</h1>
<p class="text-lg">
	Have an account? <a href="/login" class="font-semibold text-green-600">Sign In</a>
</p>
<form action="?/register" method="POST" class="py-4 text-lg">
	<Input
		type="text"
		label="Username"
		id="username"
		class="input input-bordered w-full  {form?.errors?.username ? 'input-error' : ''}"
		value={form?.data?.username}
	/>
	{#if form?.errors.username}
		<span class="ml-2 text-xs text-error-900">{form?.errors.username}</span>
	{/if}
	<Input
		type="email"
		label="Email"
		id="email"
		class="input input-bordered w-full  {form?.errors?.email ? 'input-error' : ''}"
		value={form?.data?.email}
	/>
	{#if form?.errors.email}
		<span class="ml-2 text-xs text-error-900">{form?.errors.email}</span>
	{/if}
	<Input
		type="text"
		label="Address"
		id="address"
		class="input input-bordered w-full {form?.errors?.address ? 'input-error' : ''}"
	/>
	{#if form?.errors.address}
		<span class="ml-2 text-xs text-error-900">{form?.errors.address}</span>
	{/if}
	<Input
		type="password"
		label="Password"
		id="password"
		class="input input-bordered w-full  {form?.errors?.password ? 'input-error' : ''}"
		value={form?.data?.password}
	/>
	{#if form?.errors.password}
		<span class="ml-2 text-xs text-error-900">{form?.errors.password[0]}</span>
	{/if}
	<Input
		type="password"
		label="Confirm Password"
		id="passwordConfirm"
		class="input input-bordered w-full {form?.errors?.passwordConfirm ? 'input-error' : ''}"
		value={form?.data?.passwordConfirm}
	/>
	{#if form?.errors.passwordConfirm}
		<span class="ml-2 text-xs text-error-900">{form?.errors.passwordConfirm[0]}</span>
	{/if}

	<Button btn="Register" />
</form>
