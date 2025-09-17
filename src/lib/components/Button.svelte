<script lang="ts">
	interface Props {
		href?: string;
		text?: string;
		type?: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'secondary' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		className?: string;
		disabled?: boolean;
		children?: import('svelte').Snippet;
		onclick?: (event: MouseEvent) => void;
	}

	let {
		href = '#',
		text = 'Button',
		type = 'button',
		variant = 'primary',
		size = 'md',
		className = '',
		disabled = false,
		children,
		onclick
	}: Props = $props();

	const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
	
	const variantClasses = {
		primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
		secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
		outline: 'border border-green-300 bg-white text-green-700 hover:bg-green-50 focus:ring-green-500'
	};
	
	const sizeClasses = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};
	
	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
</script>

{#if href && href !== '#'}
	<a {href} {onclick} class={classes}>
		{@render children?.()}
		{text}
	</a>
{:else}
	<button {type} {disabled} {onclick} class={classes}>
		{@render children?.()}
		{text}
	</button>
{/if}
