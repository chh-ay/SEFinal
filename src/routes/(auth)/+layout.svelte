<script lang="ts">
	import img from '$lib/images/logo.jpg';
</script>

<div class="flex h-full">
	<div class="px-32 pt-24 basis-2/5">
		<slot />
	</div>
	<div class="basis-3/5">
		<img src={img} class="w-full h-full" alt="" />
	</div>
</div>
