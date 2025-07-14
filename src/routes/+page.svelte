<script lang="ts">
    import { page } from '$app/state'
    import { NavigationMenu } from 'bits-ui'
</script>

<svelte:head>
    <title>B1ANK3</title>
    <meta name="description" content="A {page.status} response page for my github pages" />
</svelte:head>

<div class="justify-center content-center flex bg-[#282828] size-screen">
    <div class="text-[12em] font-mono font-[Roboto_Mono] content-center text-[#a9b665]">
        {page.status}
    </div>
</div>
