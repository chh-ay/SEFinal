<script lang="ts">
	import nav_logo from '$lib/images/nav_logo.png';
	import default_user from '$lib/images/default_user.jpg';

	let searchTerm = '';

	export let data;
</script>

<svelte:head>
	<title>Crafty Studio</title>
</svelte:head>

<div class="navbar bg-base-100 mt-2">
	<div class="navbar-start ml-6">
		<a class="text-xl normal-case btn btn-ghost" href="/">Design Studio</a>
	</div>
	<div class="navbar-center">
		<a class="text-lg normal-case" href="/"><img src={nav_logo} alt="" /></a>
	</div>
	<div class="navbar-end mr-12">
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-12 rounded-full">
					<img src={default_user} alt="" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="p-2 mt-3 w-52 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box"
			>
				<li>
					<a href="/profile" class="text-xl"> Profile </a>
				</li>
				{#if data.session != null}
					<li>
						<form action="/logout" method="POST" class="text-xl">
							<button class="btn-block">Logout</button>
						</form>
					</li>
				{:else}
					<li>
						<a href="/login" class="text-xl">Login</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</div>

<div class="bg-neutral-content w-full h-auto py-10">
	<input
		class="w-4/5 input input-bordered mx-auto block justify-center p-4 text-xl"
		type="text"
		placeholder="Search"
		bind:value={searchTerm}
	/>
</div>

<div class="w-full join py-4">
	<select class="select select-bordered join-item w-1/5 mx-auto">
		<option disabled selected>Category</option>
		<option>Sci-fi</option>
		<option>Drama</option>
		<option>Action</option>
	</select>
</div>
