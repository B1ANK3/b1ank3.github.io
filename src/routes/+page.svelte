<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>B1ANK3</title>
	<meta name="description" content="A 200 response page for my github pages" />
</svelte:head>

<div class="container">
	<div class="status">{$page.status}</div>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: #282828;
	}

	.status {
		font-family: 'Roboto Mono', monospace;
		font-style: normal;
		font-size: 12em;
		align-content: center;
		color: #a9b665;
	}
</style>
