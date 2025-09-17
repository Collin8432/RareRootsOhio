<script lang="ts">
	interface Props {
		label?: string;
		name?: string;
		type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
		placeholder?: string;
		value?: string;
		required?: boolean;
		disabled?: boolean;
		error?: string;
		help?: string;
		size?: 'sm' | 'md' | 'lg';
		className?: string;
		children?: import('svelte').Snippet;
		onblur?: (event: FocusEvent) => void;
	}

	let {
		label,
		name,
		type = 'text',
		placeholder,
		value = $bindable(''),
		required = false,
		disabled = false,
		error,
		help,
		size = 'md',
		className = '',
		children,
		onblur
	}: Props = $props();

	const baseClasses = 'w-full rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
	
	const sizeClasses = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-4 py-3 text-lg'
	};
	
	const stateClasses = error 
		? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
		: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
	
	const disabledClasses = disabled ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : 'bg-white';
	
	const inputClasses = `${baseClasses} ${sizeClasses[size]} ${stateClasses} ${disabledClasses} ${className}`;
</script>

<div class="space-y-1">
	{#if label}
		<label 
			for={name} 
			class="block text-sm font-medium text-gray-700"
		>
			{label}
			{#if required}
				<span class="text-red-500 ml-1">*</span>
			{/if}
		</label>
	{/if}
	
	<div class="relative">
		{#if children}
			<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				{@render children()}
			</div>
		{/if}
		<input
			{type}
			{name}
			{placeholder}
			{required}
			{disabled}
			bind:value
			{onblur}
			class="{inputClasses} {children ? 'pl-10' : ''}"
			aria-invalid={!!error}
			aria-describedby={error ? `${name}-error` : help ? `${name}-help` : undefined}
		/>
	</div>
	
	{#if error}
		<p id="{name}-error" class="text-sm text-red-600">
			{error}
		</p>
	{/if}
	
	{#if help && !error}
		<p id="{name}-help" class="text-sm text-gray-500">
			{help}
		</p>
	{/if}
</div>
