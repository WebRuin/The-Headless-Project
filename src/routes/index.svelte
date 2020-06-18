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
	export let segment;
	export let headlessCmsServices;
	console.log(headlessCmsServices);
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	section {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		justify-content: space-around;
		padding: 2rem;
	}
	section > article {
		display: flex;
		flex-wrap: wrap;
	}


	.billing,
	.links {
		padding: 1rem;
	}

	@media (max-width: 1300px) {
		section {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

<svelte:head>
	<title>The Headless Project</title>
</svelte:head>

<section class="inlaid">
	{#each headlessCmsServices as service}
		
			<article class="raised">
				<h3>{service.name}</h3>
				<h4>{service.heading}</h4>
				<h5>{service.description}</h5>
				<section class="billing">
					<div>
						<h4>Billing Cycle: <span>{headlessCmsServices.billing}</span></h4>
					</div>
					<div>
						<h4>Credit Card Needed: <span>{headlessCmsServices.creditCardNeeded ? "Yes" : "No"}</span></h4>
					</div>
				</section>
				<section class="links inlaid">
					<a rel="external nofollow" target="_blank" href="{service.url}">
						<i class="fas fa-external-link-alt"></i> {service.name}
					</a>
					<a rel=prefetch aria-current="{segment === undefined ? 'page' : undefined}" href="{service.slug.current}">
						Learn more <i class="fas fa-long-arrow-alt-right"></i>
					</a>
				</section>
			</article>
	{/each}
</section>