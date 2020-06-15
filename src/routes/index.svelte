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
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2rem;
	}
	section > article {
		display: flex;
		flex-direction: column;
		width: 44%;
		min-height: 215px;
	}

	.billing,
	.links {
		padding: 1rem 0;
	}
</style>

<svelte:head>
	<title>The Headless Project</title>
</svelte:head>

<h1>The Headless Project</h1>

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
					<a rel="prefetch" href="{service.slug.current}">
						Learn more <i class="fas fa-long-arrow-alt-right"></i>
					</a>
				</section>
			</article>
	{/each}
</section>