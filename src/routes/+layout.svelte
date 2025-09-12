<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	let { children } = $props();
</script>

<Seo />

<main class="relative flex min-h-screen flex-col antialiased">
	<div
		class="absolute top-0 left-0 z-[-2] h-full w-full bg-white text-black sm:font-normal md:font-normal"
	></div>
	<Nav />
	{@render children()}
	<Footer />
</main>
