<script lang="ts">
    import './style.css'
    import RobotoMono from '$lib/fonts/Roboto-mono.woff2'

    import { NavigationMenu, Dialog, Command } from 'bits-ui'

    let { children } = $props()

    let nav_links: { href: string; text: string }[] = [
        {
            href: '/',
            text: 'Home'
        },
        {
            href: '/blog',
            text: 'Blog'
        },
        {
            href: '/projects',
            text: 'Projects'
        },
        {
            href: '/about',
            text: 'About'
        }
    ]

    let search_open = $state(false)
    let search_value = $state('')

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            search_open = !search_open
        }
    }
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
    <link rel="preload" as="font" href={RobotoMono} type="font/woff2" crossorigin="" />
</svelte:head>

<svelte:document onkeydown={handleKeydown} />

<NavigationMenu.Root class="flex w-full justify-center fixed">
    <NavigationMenu.List class="group flex list-none item-center justify-center p-1">
        {#each nav_links as { href, text }}
            <NavigationMenu.Item>
                <NavigationMenu.Link
                    {href}
                    class="hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center px-4 py-2 bg-transparent"
                    >{text}</NavigationMenu.Link
                >
            </NavigationMenu.Item>
        {/each}
        <NavigationMenu.Indicator>
            <div class="bg-border relative top-[70%] size-2.5 rounded-tl-[2px]"></div>
        </NavigationMenu.Indicator>
    </NavigationMenu.List>
</NavigationMenu.Root>

<Dialog.Root bind:open={search_open}>
    <Dialog.Trigger>Open Command Palette</Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
            <Dialog.Title>Command Palette</Dialog.Title>
            <Dialog.Description>Search for stuff</Dialog.Description>
            <!-- Command goes here -->

            <Command.Root
                class="flex size-full"
                placeholder="Search for something..."
                bind:value={search_value}
            >
                <Command.Input />
                <Command.List>
                    <Command.Viewport>
                        <Command.Empty>No results found.</Command.Empty>
                    </Command.Viewport>
                </Command.List>
            </Command.Root>
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>

{@render children()}

<style>
    @font-face {
        font-family: 'Roboto Mono';
        src: url('$lib/fonts/Roboto-mono.woff2') format('woff2');
    }
</style>
