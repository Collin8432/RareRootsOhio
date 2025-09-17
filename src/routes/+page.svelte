<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Home - Rare Roots Ohio</title>
	<meta name="description" content="Rare Roots Ohio Home Page" />
</svelte:head>

<section class="bg-green-50 py-20">
	<div class="max-w-6xl mx-auto px-4 md:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-green-900 mb-6">
				Welcome to Rare Roots Ohio
			</h1>
			<p class="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
				Rare Roots Ohio brings healthy, local, and high quality plants grown with passion. Discover our collection of rare plants now!
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button text="Contact Us" href="/contact" variant="primary" size="lg" />
				<Button text="Learn More About Rare Roots Ohio" href="/about" variant="outline" size="lg" />
			</div>
		</div>
	</div>
</section>

<section class="py-20 bg-green-100">
	<div class="max-w-6xl mx-auto px-4 md:px-8">
		<div class="grid md:grid-cols-3 gap-8">
			{#each [
				{
					title: "Unmatched Plant Quality",
					icon: "🌱",
					desc: "Every plant at Rare Roots Ohio is hand-selected and nurtured with care, ensuring robust health and vibrant growth. We pride ourselves on delivering only the healthiest, most beautiful plants to our customers."
				},
				{
					title: "Best Prices Guaranteed",
					icon: "💸",
					desc: "We believe everyone should enjoy rare and unique plants without breaking the bank. That's why we offer the best prices in Ohio—so you can grow your collection affordably."
				},
				{
					title: "Passion for Plants",
					icon: "💚",
					desc: "Our team is passionate about plants and dedicated to sharing that love with you. From expert advice to ongoing support, we're here to help your plants thrive."
				}
			] as feature, i}
				<div
					class="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border border-green-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-200 relative overflow-hidden animate-fade-in-up"
					style="animation-delay: {i * 120}ms"
				>
					<div class="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-200 to-green-400 shadow-lg text-4xl transition-transform duration-500 group-hover:rotate-[18deg] group-hover:scale-110">
						{feature.icon}
					</div>
					<h2 class="text-2xl font-bold text-green-900 mb-3 tracking-tight drop-shadow-sm">{feature.title}</h2>
					<p class="text-green-700 mb-2 leading-relaxed">{feature.desc}</p>
					<div class="absolute -bottom-8 -right-8 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
				</div>
			{/each}

			<style>
				@keyframes fade-in-up {
					0% {
						opacity: 0;
						transform: translateY(40px) scale(0.98);
					}
					100% {
						opacity: 1;
						transform: translateY(0) scale(1);
					}
				}
				.animate-fade-in-up {
					animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both;
				}
			</style>
		</div>
	</div>
</section>
