<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>About - Rare Roots Ohio</title>
	<meta name="description" content="Learn more about our company and mission" />
</svelte:head>

<section class="bg-white py-20">
	<div class="max-w-4xl mx-auto px-4 md:px-8">
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				About Us
			</h1>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				We're passionate about growing beautiful plants and sharing them with the world.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
				<p class="text-gray-600 mb-6">
					To provide beautiful, healthy, and unique plants to the world.
				</p>
				<p class="text-gray-600 mb-8">
					We believe in the power of plants and the importance of taking care of them.
				</p>
				<Button text="Get in Touch" href="/contact" variant="primary" />
			</div>
			
			<div class="bg-gray-100 rounded-lg p-8">
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
				<ul class="space-y-3">
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700">Beautiful Plants</span>
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700">Healthy Plants</span>
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700">Unique Plants</span>
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700">Local Business!</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
