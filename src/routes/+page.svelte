<script lang="ts">
    import { page } from '$app/state'
</script>

<svelte:head>
    <title>B1ANK3</title>
    <meta name="description" content="A {page.status} response page for my github pages" />
</svelte:head>

<div class="flex h-screen w-screen content-center justify-center">
    <div class="content-center font-[Roboto_Mono] font-mono text-[12em] text-(--green) select-none">
        {page.status}
    </div>
</div>
