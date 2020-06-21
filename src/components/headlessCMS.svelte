<script>
  export let service;
  export let segment;
</script>

<style>
	.service {
		display: flex;
		flex-wrap: wrap;
	}

	h3{
		display: block;
    width: 100%;
	}

	.billing,
	.links {
		padding: 1rem;
	}

	.links {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 1300px) {
		section {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

<article class="service raised">
  <h3>{service.name}</h3>
  <h4>{service.heading}</h4>
  <h5>{service.description}</h5>
  <section class="billing">
    <div>
      <h4>
        Billing Cycle:
        <span>{service.billing}</span>
      </h4>
    </div>
    <div>
      <h4>
        Credit Card Needed:
        <span>{service.creditCardNeeded ? 'Yes' : 'No'}</span>
      </h4>
    </div>
  </section>
  <section class="links inlaid">
    <a rel="external nofollow" target="_blank" href={service.url}>
      <i class="fas fa-external-link-alt" />
      {service.name}
    </a>
    <a
      rel="prefetch"
      aria-current={segment === undefined ? 'page' : undefined}
      href={service.slug.current}>
      Learn more
      <i class="fas fa-long-arrow-alt-right" />
    </a>
  </section>
</article>
