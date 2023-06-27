<script>
    import '../../theme.postcss';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import '../../app.postcss';
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				(icon)
			</svelte:fragment>
			<nav class="bg-white border-gray-200 dark:bg-gray-900">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				  <div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					  <li>
						<a href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Stores</a>
					  </li>
					  <li>
						<a href="/designStudio" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Design Studio</a>
					  </li>
					  <li>
						<a href="myOrder" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Order</a>
					  </li>
					</ul>
				  </div>
				</div>
			</nav>
			<svelte:fragment slot="trail">
				<a href="/profile">My Profile</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>