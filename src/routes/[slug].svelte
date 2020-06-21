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
  import { getHostname } from "../components/CMSCard.svelte";
  export let service;

  const {
    billing,
    creditCardNeeded,
    description,
    heading,
    name,
    url,
    usedBy
  } = service;

  console.log(service);
  // export let index = ".";
  // export let prices = Array.from(service.pricing);
  // console.log(prices);
  // export let features = Array.from(prices);
  // console.log(features);
  // export let usedBys = Array.from(service.usedBy);
  // console.log(usedBys);
</script>

<svelte:head>
  <title>About {service.name} | The Headless Project</title>
</svelte:head>

<section>
  <div class="container mx-auto px-4 lg:px-0 py-12">
    <a rel="prefetch" class="block mb-4 text-sm text-gray-600" href=".">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
      Back to list
    </a>
    <article class="shadow rounded bg-white">
      <div class="border-b border-solid border-gray-300 px-4 py-6">
        <h2 class="text-xl text-primary">{name}</h2>
        <p>{heading}</p>
      </div>
      <ul>
        <!-- 
          It might be beneficial to find a way to map() these `li` out
          so that this markup isn't so redundant.
        -->
        <li class="flex flex-col lg:flex-row p-4 bg-gray-100">
          <h3 class="lg:w-1/5 font-medium">Elevator pitch</h3>
          <p class="text-gray-600">{description}</p>
        </li>
        <li class="flex flex-col lg:flex-row p-4">
          <h3 class="lg:w-1/5 font-medium">Billing cycle</h3>
          <p class="text-gray-600">{billing}</p>
        </li>
        <li class="flex flex-col lg:flex-row p-4 bg-gray-100">
          <h3 class="lg:w-1/5 font-medium">Credit card required</h3>
          <p class="text-gray-600">{creditCardNeeded ? 'Yes' : 'No'}</p>
        </li>
        <li class="flex flex-col lg:flex-row p-4">
          <h3 class="lg:w-1/5 font-medium">Pricing</h3>
          <p class="italic text-gray-600">TODO: Handle pricing</p>
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
        </li>
        <li class="flex flex-col lg:flex-row p-4 bg-gray-100">
          <h3 class="lg:w-1/5 font-medium">Trusted by:</h3>
          <p class="italic text-gray-600">TODO: Map the `usedBy` logos/links</p>
          <!-- {#each usedBys as usedBy}
            <a rel='external' href={usedBy.url || index}><div>{usedBy.name}</div></a>
          {/each} -->
        </li>
        <li class="flex flex-col lg:flex-row p-4">
          <h3 class="lg:w-1/5 font-medium">Website:</h3>
          <p>
            <a
              class="text-primary"
              href="{url}"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {getHostname(url)}
            </a>
          </p>
        </li>
      </ul>
    </article>
  </div>
</section>
