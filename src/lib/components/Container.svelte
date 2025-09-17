<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		size = 'lg',
		className = '',
		children
	}: Props = $props();

	const sizeClasses = {
		sm: 'max-w-2xl',
		md: 'max-w-4xl',
		lg: 'max-w-6xl',
		xl: 'max-w-7xl',
		full: 'max-w-full'
	};
	
	const classes = `mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`;
</script>

<div class={classes}>
	{@render children?.()}
</div>
