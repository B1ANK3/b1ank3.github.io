<script lang="ts">
    import { page } from '$app/state'
</script>

<svelte:head>
    <title>Error</title>
    <meta name="description" content="An error occurred with the site" />
</svelte:head>

<div class="flex h-screen w-screen content-center justify-center">
    <div class="content-center font-[Roboto_Mono] font-mono text-[12em] text-(--red) select-none">
        {page.status}
    </div>
</div>
