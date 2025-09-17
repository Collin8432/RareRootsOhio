<script lang="ts">
	import Button from './Button.svelte';
	
	// Navigation items - customize these for your project
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/components', label: 'Components' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<nav class="flex items-center justify-between py-4 px-4 md:px-8">
	<div>
		<a href="/" class="text-xl font-bold text-green-900 hover:text-green-700 transition-colors">
			Rare Roots Ohio
		</a>
	</div>
	
	<div class="hidden md:flex items-center space-x-8">
		{#each navItems as item}
			<a 
				href={item.href} 
				class="text-green-600 hover:text-green-900 transition-colors"
			>
				{item.label}
			</a>
		{/each}
	</div>
	
	<div class="md:hidden">
		<Button text="Menu" className="text-green-600 hover:text-green-900" />
	</div>
</nav>

