<script lang="ts">
	import { Input } from '$lib/componenets';
	export let form;
</script>

<h1 class="py-2 text-5xl font-bold">Sign Up</h1>
<p class="text-lg">
	Have an account? <a href="/login" class="font-semibold text-green-600">Sign In</a>
</p>
<form action="?/register" method="POST" class="py-8 text-lg">
	<Input
		type="text"
		label="Username"
		id="username"
		class="input {form?.errors?.username ? 'input-error' : 'input-group'}"
		value={form?.data?.username}
		form={form?.errors.username ? form?.errors.username : ''}
	/>
	<Input
		type="email"
		label="Email"
		id="email"
		class="input {form?.errors?.email ? 'input-error' : 'input-group'}"
		value={form?.data?.email}
		form={form?.errors.email ? form?.errors.email : ''}
	/>
	<Input
		type="password"
		label="Password"
		id="password"
		class="input {form?.errors?.password ? 'input-error' : 'input-group'}"
		value={form?.data?.password}
		form={form?.errors.password[0] ?? form?.errors.password}
	/>
	<Input
		type="password"
		label="Confirm Password"
		id="passwordConfirm"
		class="input {form?.errors?.passwordConfirm ? 'input-error' : 'input-group'}"
		value={form?.data?.passwordConfirm}
		form={form?.errors.passwordConfirm[0] ?? form?.errors.passwordConfirm}
	/>

	<button type="submit" class="my-4 w-full btn variant-filled btn-lg">Sign Up</button>
</form>
<p class="text-md">
	Are you a seller? <a href="/" class="font-semibold text-green-600">Register Here</a>
</p>
