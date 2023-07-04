<script lang="ts">
	export let label: string;
	export let id: string;
</script>

<label for={id} class="label mt-4">
	<span class="label-text text-lg">{label}</span>
</label>
<input name={id} {...$$restProps} />
