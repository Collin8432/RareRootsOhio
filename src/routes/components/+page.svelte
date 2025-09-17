<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Alert from '$lib/components/Alert.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Input from '$lib/components/Input.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import Container from '$lib/components/Container.svelte';
	
	let modalOpen = false;
	let alertVisible = true;
	let inputValue = '';
	let inputError = '';
	
	function showModal() {
		modalOpen = true;
	}
	
	function closeModal() {
		modalOpen = false;
	}
	
	function dismissAlert() {
		alertVisible = false;
	}
	
	function validateInput() {
		if (!inputValue.trim()) {
			inputError = 'This field is required';
		} else if (inputValue.length < 3) {
			inputError = 'Must be at least 3 characters';
		} else {
			inputError = '';
		}
	}
</script>

<svelte:head>
	<title>Components - Your Website</title>
	<meta name="description" content="Component showcase and examples" />
</svelte:head>

<Container>
	<div class="py-20">
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Component Library
			</h1>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				A collection of reusable, accessible components built with SvelteKit and TailwindCSS.
			</p>
		</div>

		<!-- Buttons Section -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8">Buttons</h2>
			<Card>
				<div class="space-y-6">
					<div class="flex flex-wrap gap-4">
						<Button text="Primary" variant="primary" />
						<Button text="Secondary" variant="secondary" />
						<Button text="Outline" variant="outline" />
					</div>
					<div class="flex flex-wrap gap-4">
						<Button text="Small" size="sm" />
						<Button text="Medium" size="md" />
						<Button text="Large" size="lg" />
					</div>
					<div class="flex flex-wrap gap-4">
						<Button text="Disabled" disabled={true} />
						<Button text="Link Button" href="/about" />
					</div>
				</div>
			</Card>
		</section>

		<!-- Cards Section -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8">Cards</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<Card variant="default">
					<h3 class="text-lg font-semibold mb-2">Default Card</h3>
					<p class="text-gray-600">This is a default card with standard styling.</p>
				</Card>
				<Card variant="outlined">
					<h3 class="text-lg font-semibold mb-2">Outlined Card</h3>
					<p class="text-gray-600">This card has a prominent border.</p>
				</Card>
				<Card variant="elevated">
					<h3 class="text-lg font-semibold mb-2">Elevated Card</h3>
					<p class="text-gray-600">This card has a shadow for depth.</p>
				</Card>
			</div>
		</section>

		<!-- Badges Section -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8">Badges</h2>
			<Card>
				<div class="space-y-6">
					<div class="flex flex-wrap gap-3">
						<Badge variant="default">Default</Badge>
						<Badge variant="primary">Primary</Badge>
						<Badge variant="success">Success</Badge>
						<Badge variant="warning">Warning</Badge>
						<Badge variant="error">Error</Badge>
					</div>
					<div class="flex flex-wrap gap-3">
						<Badge size="sm">Small</Badge>
						<Badge size="md">Medium</Badge>
						<Badge size="lg">Large</Badge>
					</div>
				</div>
			</Card>
		</section>

		<!-- Alerts Section -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8">Alerts</h2>
			<div class="space-y-4">
				{#if alertVisible}
					<Alert variant="info" dismissible ondismiss={dismissAlert}>
						<p class="font-medium">Information</p>
						<p>This is an informational alert that can be dismissed.</p>
					</Alert>
				{/if}
				<Alert variant="success">
					<p class="font-medium">Success!</p>
					<p>Your action was completed successfully.</p>
				</Alert>
				<Alert variant="warning">
					<p class="font-medium">Warning</p>
					<p>Please review your input before proceeding.</p>
				</Alert>
				<Alert variant="error">
					<p class="font-medium">Error</p>
					<p>Something went wrong. Please try again.</p>
				</Alert>
			</div>
		</section>

		<!-- Inputs Section -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8">Form Inputs</h2>
			<Card>
				<div class="space-y-6">
					<Input 
						label="Email Address" 
						name="email" 
						type="email" 
						placeholder="Enter your email"
						help="We'll never share your email with anyone else."
					/>
					
					<Input 
						label="Password" 
						name="password" 
						type="password" 
						placeholder="Enter your password"
						required={true}
					/>
					
					<Input 
						label="Username" 
						name="username" 
						bind:value={inputValue}
						placeholder="Enter your username"
						error={inputError}
						onblur={validateInput}
					/>
					
					<Input 
						label="Search" 
						name="search" 
						type="search" 
						placeholder="Search..."
					>
						<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</Input>
				</div>
			</Card>
		</section>

		<!-- Spinners Section -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8">Loading Spinners</h2>
			<Card>
				<div class="space-y-6">
					<div class="flex items-center gap-6">
						<Spinner size="sm" />
						<Spinner size="md" />
						<Spinner size="lg" />
						<Spinner size="xl" />
					</div>
					<div class="flex items-center gap-6">
						<Spinner color="primary" />
						<Spinner color="secondary" />
						<Spinner color="gray" />
					</div>
				</div>
			</Card>
		</section>

		<!-- Modal Section -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-8">Modal</h2>
			<Card>
				<Button text="Open Modal" onclick={showModal} />
			</Card>
		</section>
	</div>
</Container>

<!-- Modal -->
<Modal bind:open={modalOpen} size="md" onclose={closeModal}>
	<div class="space-y-4">
		<h3 class="text-lg font-semibold text-gray-900">Modal Example</h3>
		<p class="text-gray-600">
			This is an example modal. You can close it by clicking the X button, 
			clicking outside the modal, or pressing the Escape key.
		</p>
		<div class="flex justify-end space-x-3 pt-4">
			<Button text="Cancel" variant="outline" onclick={closeModal} />
			<Button text="Confirm" variant="primary" onclick={closeModal} />
		</div>
	</div>
</Modal>
