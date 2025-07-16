<script lang="ts">
    import '../app.css'
    import '@unocss/reset/normalize.css'
    import RobotoMono from '$lib/fonts/Roboto-mono.woff2'
    // import { Command, Dialog } from 'bits-ui'
    import * as Command from '$lib/components/ui/command/index'
    import { ModeWatcher } from 'mode-watcher'
    import * as NavigationMenu from '$lib/components/ui/navigation-menu/index'

    let { children } = $props()

    let nav_links: { index: number; href: string; text: string }[] = [
        { index: 0, href: '/', text: 'Home' },
        { index: 1, href: '/blog', text: 'Blog' },
        {
            index: 2,
            href: '/projects',
            text: 'Projects'
        },
        { index: 3, href: '/about', text: 'About' }
    ]

    function onkeydown(e: KeyboardEvent) {
        if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            open = !open
        }
    }

    let open = $state(false)
    let value = $state('')
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
    <link rel="preload" as="font" href={RobotoMono} type="font/woff2" crossorigin="" />
</svelte:head>

<svelte:document {onkeydown} />

<ModeWatcher />

<Command.Dialog bind:open>
    <Command.Input bind:value placeholder="Type a command or search..." />
    <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
            <Command.Item>Calendar</Command.Item>
            <Command.Item>Search Emoji</Command.Item>
            <Command.Item>Calculator</Command.Item>
        </Command.Group>
    </Command.List>
</Command.Dialog>

<div class="align-center fixed flex w-screen justify-center">
    <NavigationMenu.Root>
        <NavigationMenu.List>
            {#each nav_links as { index, href, text } (index)}
                <NavigationMenu.Item class="hover:bg-muted">
                    <NavigationMenu.Link {href}>{text}</NavigationMenu.Link>
                </NavigationMenu.Item>
            {/each}
        </NavigationMenu.List>
    </NavigationMenu.Root>
</div>

{@render children?.()}
