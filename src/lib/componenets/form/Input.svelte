<script lang="ts">
	export let label: string;
	export let id: string;
</script>

<label for={id} class="pt-4">
	<span class="pl-2">{label}</span>
	<input name={id} {...$$restProps} />
</label>
