<script>
import '../../theme.postcss';
import '@skeletonlabs/skeleton/styles/skeleton.css';
import '../../app.postcss';
import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>
<AppShell>
	<!-- (header) -->
	<!-- (sidebarLeft) -->
	<svelte:fragment slot="sidebarRight">
		<img src="../src/lib/images/Logo.png" width="950px" alt="Logo">
	</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
