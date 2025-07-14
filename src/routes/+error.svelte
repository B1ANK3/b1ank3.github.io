<script lang="ts">
    import { page } from '$app/state'
</script>

<svelte:head>
    <title>Error</title>
    <meta name="description" content="An error occurred with the site" />
</svelte:head>

<div class="justify-center content-center flex bg-[#282828] size-screen">
    <div class="text-[12em] font-mono font-[Roboto_Mono] content-center text-[#ea6962]">
        {page.status}
    </div>
</div>
