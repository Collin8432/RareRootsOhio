<script>
	import { onMount } from 'svelte';
	import { createObserver } from '$lib/components/intersectionObserver';
	import { browser } from '$app/environment';

	/**
	 * @type {Element}
	 */
	let section;
	let visible = false;

	onMount(() => {
		if (!browser) return;

		const observer = createObserver(([entry]) => {
			visible = entry.isIntersecting;
		});

		setTimeout(() => {
			if (section) {
				observer.observe(section);
				const rect = section.getBoundingClientRect();
				if (rect.top < window.innerHeight) {
					visible = true;
				}
			}
		}, 100);

		return () => {
			if (section) observer.unobserve(section);
		};
	});
</script>

<div bind:this={section} class:visible class="transition">
	<slot />
</div>

<style>
	div {
		opacity: 0;
		transform: translateX(-100px);
		transition:
			opacity 2s,
			transform 1s;
	}
	div:global(.visible) {
		opacity: 1;
		transform: translateX(0);
	}
</style>
