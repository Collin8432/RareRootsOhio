<script lang="ts">
	export let label: string;
	export let name: string;
	export let type = 'text';
	export let required = false;
	export let placeholder = '';
	export let error = '';
</script>

<div>
	<label for={name} class="mb-2 text-sm font-medium text-black">
		{label}
		{#if required}<span class="text-red-500">*</span>{/if}
	</label>
	<input
		{name}
		{type}
		id={name}
		{required}
		aria-required={required}
		aria-invalid={!!error}
		aria-describedby={error ? `${name}-error` : undefined}
		class="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
		{placeholder}
	/>
	{#if error}
		<p id="{name}-error" class="mt-1 text-sm text-red-600">{error}</p>
	{/if}
</div>
