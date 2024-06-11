<script>
	import './style.css';
	import RobotoMono from '$lib/fonts/Roboto-mono.woff2';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<link rel="preload" as="font" href={RobotoMono} type="font/woff2" crossorigin="" />
</svelte:head>

<slot />

<style>
	@font-face {
		font-family: 'Roboto Mono';
		src: url('$lib/fonts/Roboto-mono.woff2') format('woff2');
	}
</style>
