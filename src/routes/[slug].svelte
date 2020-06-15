<script context="module">
  import client from "./sanityClient.js";
  export async function preload({ params }) {
    const { slug } = params;
    const SERVICE_QUERY = `*[_type == "cms" && slug.current == $slug][0]{...}`;
    const FEATURES_QUERY = `*[_type == "cms" && features._ref in *[_type=="features"]._id ]{...}`;
    const service = await client
      .fetch(SERVICE_QUERY, { slug })
      .catch(err => this.error(500, err));
    return { service };
  }
</script>

<script>
  // export let index = ".";
  export let service;
  console.log(service);  
  // export let prices = Array.from(service.pricing);
  // console.log(prices);
  // export let features = Array.from(prices);
  // console.log(features);
  // export let usedBys = Array.from(service.usedBy);
  // console.log(usedBys);
</script>

<style>

  .content :global(pre) {
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .pricing,
  .usedBy {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .pricing > div {
    padding: 1rem;
  }
  .usedBy > a {
    text-decoration: none;
  }
  .usedBy > a > div {
    padding: 1rem;
    border-radius: 9px;
    background: linear-gradient(145deg, #181f22, #141a1d);
    box-shadow:  8px 8px 16px #12171a, 
             -8px -8px 16px #1a2326;
    color: #A088FF;
  }
  .usedBy > a > div:hover {
    background: linear-gradient(145deg, #141a1d, #181f22);
    box-shadow:  8px 8px 16px #12171a, 
             -8px -8px 16px #1a2326;
    color: #373A6E;
  }
</style>

<svelte:head>
  <title>{service.name} | The Headless Project</title>
</svelte:head>

<div class="content">
  <h1><a rel="prefetch" href={service.url}>{service.name}</a></h1>
  <h2>{service.heading}</h2>
  <h3>{service.description}</h3>

  <h2 class="orange centered">Pricing</h2>
  <section class="inlaid pricing">
    <section class="billing">
      <div>
        <h4>Billing Cycle: <span>{service.billing}</span></h4>
      </div>
      <div>
        <h4>Credit Card Needed: <span>{service.creditCardNeeded ? "Yes" : "No"}</span></h4>
      </div>
    </section>
    <!-- {#each prices as price}
      <div>
        <h3>{price.tier}</h3>
        <p>{price.description}</p>
        <p>${price.price}</p>
        <ul>
          {#each features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
      </div>
    {/each} -->
  </section>

  <h2 class="orange centered">Trusted By</h2>
  <section class="usedBy">
    <!-- {#each usedBys as usedBy}
      <a rel='external' href={usedBy.url || index}><div>{usedBy.name}</div></a>
    {/each} -->
  </section>
</div>