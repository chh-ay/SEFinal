<script lang="ts">
	export let label: string;
	export let id: string;
</script>

<label for={id} class="mt-4">
	<span class="ml-2">{label}</span>
	<input name={id} {...$$restProps} />
</label>
