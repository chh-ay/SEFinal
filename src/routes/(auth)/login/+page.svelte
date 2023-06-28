<script lang="ts">
	import { Input } from '$lib/componenets';
</script>

<h1 class="py-2 text-5xl font-bold">Sign Up</h1>
<p class="text-lg">
	Need an account? <a href="/register" class="font-semibold text-green-600">Create One</a>
</p>
<form action="?/login" method="POST" class="py-12 text-lg">
	<Input type="email" label="Email" name="email" />
	<Input type="password" label="Password" name="password" />

	<button type="submit" class="my-4 w-full btn variant-filled btn-lg">Sign Up</button>
</form>
<p class="text-md">
	Are you a seller? <a href="/" class="font-semibold text-green-600">Register Here</a>
</p>
