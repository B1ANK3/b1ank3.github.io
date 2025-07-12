<script lang="ts">
    import { page } from '$app/stores'
</script>

<svelte:head>
    <title>Error</title>
    <meta name="description" content="An error occurred with the site" />
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
        color: #ea6962;
    }
</style>
