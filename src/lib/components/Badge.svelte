<script lang="ts">
	interface Props {
		variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
		size?: 'sm' | 'md' | 'lg';
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		variant = 'default',
		size = 'md',
		className = '',
		children
	}: Props = $props();

	const baseClasses = 'inline-flex items-center font-medium rounded-full';
	
	const variantClasses = {
		default: 'bg-gray-100 text-gray-800',
		primary: 'bg-blue-100 text-blue-800',
		secondary: 'bg-gray-100 text-gray-800',
		success: 'bg-green-100 text-green-800',
		warning: 'bg-yellow-100 text-yellow-800',
		error: 'bg-red-100 text-red-800'
	};
	
	const sizeClasses = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-3 py-1 text-sm',
		lg: 'px-4 py-2 text-base'
	};
	
	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
</script>

<span class={classes}>
	{@render children?.()}
</span>
