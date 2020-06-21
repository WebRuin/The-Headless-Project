<script context="module">
  import client from "../routes/sanityClient";
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
    return client
      .fetch(query)
      .then(headlessCmsServices => {
        return { headlessCmsServices };
      })
      .catch(err => this.error(500, err));
  }
</script>

<script>
  import CMSCard from "../components/CMSCard.svelte";
  import CMSRow from "../components/CMSRow.svelte";

  export let headlessCmsServices;
  // console.log(headlessCmsServices);
</script>

<svelte:head>
  <title>The Headless Project</title>
</svelte:head>

<section class="py-12">
  <div class="container mx-auto px-4 lg:px-0">
    <div class="flex justify-between flex-wrap">
      {#each headlessCmsServices as service}
        <CMSCard {service} />
      {/each}
    </div>
  </div>
</section>

<section class="py-12">
  <div class="container mx-auto px-4 lg:px-0">
    <div
      class="rounded shadow overflow-hidden bg-white divide-y divide-gray-300">
      {#each headlessCmsServices as service}
        <CMSRow {service} />
      {/each}
    </div>
  </div>
</section>
