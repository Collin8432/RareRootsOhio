<script lang="ts">
	import { supabase } from '$lib/utils/supabaseClient';
	import { onMount } from 'svelte';

	// declare a reactive variable to hold plants
	let plants: any[] = [];

	onMount(async () => {
		const { data, error } = await supabase
			.from('plants')
			.select('*');

		if (error) {
			console.error('Error fetching plants:', error.message);
		} else {
			plants = data; // update the variable so Svelte can render it
		}
	});
</script>

<svelte:head>
	<title>Plants - Rare Roots Ohio</title>
	<meta name="description" content="Rare Roots Ohio Plants" />
</svelte:head>

<section class="bg-green-50 py-20">
	<div class="max-w-6xl mx-auto px-4 md:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-green-900 mb-6">
				All of our current plants!
			</h1>
			<p class="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
				Rare Roots Ohio has the cheapest and richest selection of plants in the area!
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				{#if plants.length > 0}
{#each plants as plant}
	<div class="bg-white rounded-2xl shadow p-4 text-left max-w-sm">
		<h2 class="font-semibold text-green-900 text-xl mb-2">{plant.name}</h2>
		<p class="text-green-800 font-medium mb-1">Price: ${plant.price}</p>
		<p class="text-green-600">USDA Hardiness Zones: {plant.usdahardinesszone}</p>
        		{#if plant.image}
			<img src="{plant.image}" alt="{plant.name}" class="w-full h-48 object-cover rounded-lg mb-4" />

		<a href="/plants/{plant.name}" class="text-green-600 hover:text-green-700">View Plant</a>
		{/if}
	</div>
{/each}
				{:else}
					<p class="text-green-700">No plants available right now.</p>
				{/if}
			</div>
		</div>
	</div>
</section>