<script>
	// @ts-nochecks
	import { page } from '$app/stores';

	export let title = '';
	export let website = 'rarerootsohio.com';
	export let description =
		'';
	export let image = `https://${website}/profile-image.png`;
	export let keywords =
		'';
</script>

<svelte:head>
	<title>{title} | {website}</title>
	<meta name="description" content={description} />
	<meta property="og:site_name" content={website} />
	<meta property="og:url" content={`https://${website}${$page.url.pathname}`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<link rel="apple-touch-icon" href={image} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={`https://${website}${$page.url.pathname}`} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:domain" content={website} />
	<meta property="twitter:url" content={`https://${website}${$page.url.pathname}`} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{@html `
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Website",
		"name": "${title} | ${website}",
		"url": "https://${website}${$page.url.pathname}",
		"logo": "${image}"
	}
	</script>
	`}
</svelte:head>
