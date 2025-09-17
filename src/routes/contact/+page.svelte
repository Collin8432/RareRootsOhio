<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	
	let formData = {
		name: '',
		email: '',
		message: ''
	};
	
	let errors = {
		name: '',
		email: '',
		message: ''
	};
	
	let isSubmitting = false;
	let isSubmitted = false;
	
	function validateForm() {
		errors = { name: '', email: '', message: '' };
		let isValid = true;
		
		if (!formData.name.trim()) {
			errors.name = 'Name is required';
			isValid = false;
		}
		
		if (!formData.email.trim()) {
			errors.email = 'Email is required';
			isValid = false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errors.email = 'Please enter a valid email address';
			isValid = false;
		}
		
		if (!formData.message.trim()) {
			errors.message = 'Message is required';
			isValid = false;
		}
		
		return isValid;
	}
	
	async function handleSubmit(event: Event) {
		event.preventDefault();
		if (!validateForm()) return;
		
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		isSubmitting = false;
		isSubmitted = true;
		formData = { name: '', email: '', message: '' };
	}
</script>

<svelte:head>
	<title>Contact - Rare Roots Ohio</title>
	<meta name="description" content="Get in touch with us" />
</svelte:head>

<section class="bg-white py-20">
	<div class="max-w-4xl mx-auto px-4 md:px-8">
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Contact Us
			</h1>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Have a question or want to work together? We'd love to hear from you.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12">
			<div>
				<h2 class="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
				<div class="space-y-6">
					<div class="flex items-start">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Email</h3>
							<p class="text-gray-600">...</p>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Phone</h3>
							<p class="text-gray-600">+1 (216) 123-4567</p>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Location</h3>
							<p class="text-gray-600">North Royalton, Ohio</p>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				{#if isSubmitted}
					<div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
						<div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
							</svg>
						</div>
						<h3 class="text-lg font-semibold text-green-900 mb-2">Message Sent!</h3>
						<p class="text-green-700">Thank you for your message. We'll get back to you soon.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-6">
						<Input
							label="Name"
							name="name"
							type="text"
							required={true}
							placeholder="Your name"
							error={errors.name}
							bind:value={formData.name}
						/>
						
						<Input
							label="Email"
							name="email"
							type="email"
							required={true}
							placeholder="your@email.com"
							error={errors.email}
							bind:value={formData.email}
						/>
						
						<div>
							<label for="message" class="mb-2 text-sm font-medium text-gray-900">
								Message <span class="text-red-500">*</span>
							</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								required
								placeholder="Your message..."
								bind:value={formData.message}
								class="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
							></textarea>
							{#if errors.message}
								<p class="mt-1 text-sm text-red-600">{errors.message}</p>
							{/if}
						</div>
						
						<Button
							text={isSubmitting ? 'Sending...' : 'Send Message'}
							type="submit"
							variant="primary"
							size="lg"
							disabled={isSubmitting}
							className="w-full"
						/>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
