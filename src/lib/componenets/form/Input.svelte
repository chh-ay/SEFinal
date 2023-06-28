<script lang="ts">
	export let label: string;
	export let id: string;
	export let form: any;
</script>

<label for={id} class="mb-4">
	<span class="ml-2">{label}</span>
	<input name={id} {...$$restProps} />
	{#if !{ form }}
		<span />
	{:else}
		<span class="text-xs text-error-900">{form}</span>
	{/if}
</label>
