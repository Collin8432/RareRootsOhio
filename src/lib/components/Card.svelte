<script lang="ts">
	interface Props {
		variant?: 'default' | 'outlined' | 'elevated';
		padding?: 'none' | 'sm' | 'md' | 'lg';
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		variant = 'default',
		padding = 'md',
		className = '',
		children
	}: Props = $props();

	const baseClasses = 'rounded-lg transition-all duration-200';
	
	const variantClasses = {
		default: 'bg-white border border-gray-200',
		outlined: 'bg-transparent border-2 border-gray-300',
		elevated: 'bg-white shadow-lg border border-gray-100'
	};
	
	const paddingClasses = {
		none: '',
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8'
	};
	
	const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
</script>

<div class={classes}>
	{@render children?.()}
</div>
