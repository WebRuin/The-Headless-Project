<script context="module">
	import client from '../routes/sanityClient';
	const query = `*[_type == "cms" && defined(slug.current)]
		{
			billing,
			creditCardNeeded,
			description,
			heading,
			name,
			slug,
			url,
		}
	`;
	export function preload() {
    return client.fetch(query).then(headlessCmsServices => {
			return { headlessCmsServices };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
	export let headlessCmsServices;
	console.log(headlessCmsServices);

	import HeadlessCMS from "../components/headlessCMS.svelte"
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	section {
		display: grid;
		grid-gap: 1.25rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		justify-content: space-around;
		padding: 1.25rem;
	}
</style>

<svelte:head>
	<title>The Headless Project</title>
</svelte:head>

<section class="inlaid">
	{#each headlessCmsServices as service}
		<HeadlessCMS {service} />
	{/each}
</section>