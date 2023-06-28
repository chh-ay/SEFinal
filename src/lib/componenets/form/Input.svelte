<script lang="ts">
	export let label: string;
</script>

<label class="label my-4">
	<span class="px-2">{label}</span>
	<input class="input py-3" {...$$restProps} />
</label>
