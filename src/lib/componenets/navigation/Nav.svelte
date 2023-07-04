<script lang="ts">
	import nav_logo from '$lib/images/nav_logo.png';
	import default_user from '$lib/images/default_user.jpg';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a class="text-xl normal-case btn btn-ghost" href="/">Design Studio</a>
	</div>
	<div class="navbar-center">
		<a class="text-lg normal-case" href="/"><img src={nav_logo} alt="" /></a>
	</div>
	<div class="navbar-end">
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
					<a href="/profile" class="justify-between"> Profile </a>
				</li>
				<li>
					<form action="/logout" method="POST" class="justify-between">
						<button type="submit" class="btn">Logout</button>
					</form>
				</li>
			</ul>
		</div>
	</div>
</div>
