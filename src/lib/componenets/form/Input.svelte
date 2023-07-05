<script lang="ts">
	export let label: string;
	export let id: string;
</script>

<label for={id} class="mt-4 label">
	<span class="my-2 ml-2 label-text">{label}</span>
	<input name={id} {...$$restProps} />
</label>
