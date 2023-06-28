<script lang="ts">
	import { Input } from '$lib/componenets';
</script>

<h1 class="py-2 text-5xl font-bold">Sign Up</h1>
<p class="text-lg">
	Have an account? <a href="/login" class="font-semibold text-green-600">Sign In</a>
</p>
<form action="?/register" method="POST" class="py-8 text-lg">
	<Input type="text" label="Username" name="username" />
	<Input type="email" label="Email" name="email" />
	<Input type="password" label="Password" name="password" />
	<Input type="password" label="Confirm Password" name="passwordConfirm" />

	<button type="submit" class="my-4 w-full btn variant-filled btn-lg">Sign Up</button>
</form>
<p class="text-md">
	Are you a seller? <a href="/" class="font-semibold text-green-600">Register Here</a>
</p>
