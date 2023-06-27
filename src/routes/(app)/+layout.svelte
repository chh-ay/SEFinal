<script>
	import '../../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<nav class="bg-white border-gray-200 dark:bg-gray-900">
				<div class="flex flex-wrap justify-between items-center p-4 mx-auto max-w-screen-xl">
					<div class="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul
							class="flex flex-col p-4 mt-4 font-medium bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:p-0 md:mt-0 md:space-x-8 md:bg-white md:border-0 dark:bg-gray-800 dark:border-gray-700 md:dark:bg-gray-900"
						>
							<li>
								<a
									href="/"
									class="block py-2 pr-4 pl-3 text-gray-900 rounded md:p-0 md:border-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white"
									>Stores</a
								>
							</li>
							<li>
								<a
									href="/designStudio"
									class="block py-2 pr-4 pl-3 text-gray-900 rounded md:p-0 md:border-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white"
									>Design Studio</a
								>
							</li>
							<li>
								<a
									href="myOrder"
									class="block py-2 pr-4 pl-3 text-gray-900 rounded md:p-0 md:border-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white"
									>My Order</a
								>
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

