<script lang="ts">
	import { browser } from '$app/environment';
	
	interface Props {
		open?: boolean;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		className?: string;
		children?: import('svelte').Snippet;
		onclose?: () => void;
	}

	let {
		open = $bindable(false),
		size = 'md',
		className = '',
		children,
		onclose
	}: Props = $props();

	const sizeClasses = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-4xl'
	};

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			handleClose();
		}
	}

	function handleClose() {
		onclose?.();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleClose();
		}
	}

	// Prevent body scroll when modal is open
	$effect(() => {
		if (browser) {
			if (open) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	});
</script>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div 
		class="fixed inset-0 z-50 overflow-y-auto"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div class="flex min-h-full items-center justify-center p-4">
			<!-- Backdrop -->
			<div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
			
			<!-- Modal -->
			<div class="relative bg-white rounded-lg shadow-xl w-full {sizeClasses[size]} {className}">
				<!-- Close button -->
				<button
					onclick={handleClose}
					class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
					aria-label="Close modal"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
				
				<!-- Content -->
				<div class="p-6">
					{@render children?.()}
				</div>
			</div>
		</div>
	</div>
{/if}
