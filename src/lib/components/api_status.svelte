<script lang="ts">
    import { onMount } from 'svelte'

    type HCStatus = {
        status: 'up' | 'down' | 'unavailable'
        total: number
        grace: number
        down: number
    }

    let status: HCStatus | undefined = $state(undefined)

    onMount(async () => {
        status = await fetch(
            'https://healthchecks.io/b/2/7a3fb6b3-75da-4cab-b841-c14671a06f95.json'
        )
            .then((v) => v.json())
            .catch((e) => {
                console.error(e)
                return {
                    status: 'unavailable',
                    total: 0,
                    grace: 0,
                    down: 0
                }
            })
    })
</script>

<div>
    {#if status?.status == 'up'}
        <div>Green circle</div>
        <span class="text-green">Online</span>
    {:else if status?.status == 'down'}
        <div>Red square</div>
        <span class="text-red">Offline</span>
    {:else}
        <div>Orange triangle</div>
        <span class="text-amber">Unknown</span>
    {/if}
</div>
