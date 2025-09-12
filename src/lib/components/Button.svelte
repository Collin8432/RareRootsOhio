<script>
	export let href = '#';
	export let text = 'Button';
	export let type = 'button';
	export let className = 'bg-green-200 text-white';
	let _class =
		'text-md inline-block rounded p-3 font-bold transition-all hover:scale-110 hover:cursor-pointer md:text-xl';
</script>

{#if type === 'submit'}
	<button {type} class={className + ' ' + _class}>
		<slot></slot>
		{text}
	</button>
{:else}
	<a {href} class={className + ' ' + _class}>
		<slot></slot>
		{text}
	</a>
{/if}
