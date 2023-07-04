<script lang="ts">
	export let data;
</script>

<h1>Hello {data.session?.user.user_metadata.username} from owner dashboard</h1>
<form action="/logout" method="POST"><button class="btn border-t-neutral-950">Logout</button></form>
