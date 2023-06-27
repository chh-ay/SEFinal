<script>
    import '../theme.postcss';
    import '../app.postcss';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>
<AppShell>
    <!-- (header) -->
    <!-- (sidebarLeft) -->
    <svelte:fragment slot="sidebarRight">
        <img src="../src/lib/images/logo.jpg" width="950px" alt="Logo">
    </svelte:fragment>
    <!-- (pageHeader) -->
    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->
    <!-- (pageFooter) -->
    <!-- (footer) -->
</AppShell>
