<script>
	import Button from './Button.svelte';
</script>

<nav class="flex justify-between py-2">
	<div class="mt-4 ml-1 md:ml-4">
		<a href="/">
			<h1 class="text-xl font-bold md:text-3xl">Rare Roots Ohio</h1>
		</a>
	</div>
	<div class="mt-2 mr-1 flex gap-3 text-xs md:mr-4">
		<Button text="Contact!" href="/contact" className="text-white bg-green-300" />
	</div>
</nav>
