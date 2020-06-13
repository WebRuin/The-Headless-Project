<script context="module">
  import data from "./sanityClient.js"; 
  import groq from 'groq'

  const query = groq`*[_type == "cms"]{
    title,
    "name": author->name,
    "categories": categories[]->title
  }`

  const cmsData = async (query) => {
    const data = await client.fetch(query)
    .catch(err => error(500, err));
    return data;
  }
  const index = ".";
</script>

<script>
  export let cms;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{cms.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
  */
  .content :global(h1 > a) {
    color: rgb(255,62,0);
    text-decoration: none;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
    padding-top: 1rem;
  }
  .content :global(h3) {
    font-weight: 500;
    color: #3D3FFF;
  }

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

  .usedBy {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .pricing,
  .usedBy {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem;
    color: var(--gray);
    border-radius: 15px;
    box-shadow: inset 8px 8px 16px #12171a, 
                inset -8px -8px 16px #1a2326;
    border-top: 2px solid rgb(255,62,0);
  }

  .pricing > div {
    margin: 1rem;
    padding: 1rem;
    border-radius: 9px;
    border-top: 2px solid #5EFF19;
    background: linear-gradient(145deg, #141a1d, #181f22);
    box-shadow:  8px 8px 16px #12171a, 
                -8px -8px 16px #1a2326;
  }
  .usedBy > a {
    text-decoration: none;
  }
  .usedBy > a > div {
    margin: 1rem;
    padding: 1rem;
    border-radius: 9px;
    background: linear-gradient(145deg, #141a1d, #181f22);
    box-shadow:  8px 8px 16px #12171a, 
             -8px -8px 16px #1a2326;
    color: #A088FF;
  }
  .usedBy > a > div:hover {
    background: linear-gradient(145deg, #181f22, #141a1d);
    box-shadow:  8px 8px 16px #12171a, 
             -8px -8px 16px #1a2326;
    color: #373A6E;
  }
  .orange {
    color: rgb(255,62,0);
  }
  .centered {
    text-align: center;
  }
  /* .plateau {
    padding: 1rem;
    margin: 1rem;
    border-radius: 9px;
    background: linear-gradient(145deg, #141a1d, #181f22);
    box-shadow:  8px 8px 16px #12171a, 
             -8px -8px 16px #1a2326;
  } */
</style>

<svelte:head>
  <title>{cms.name} | The Headless Project</title>
</svelte:head>

<div class="content">
  <h1><a rel="prefetch" href={cms.url}>{cms.name}</a></h1>
  <h2>{cms.heading}</h2>
  <h3>{cms.description}</h3>

  <h2 class="orange centered">Pricing</h2>
  <section class="pricing">
    {#each cms.pricing as pricing}
      <div>
        <h3>{pricing.tier}</h3>
        <p>{pricing.description}</p>
        <p>${pricing.price}</p>
        <ul>
          {#each pricing.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

  <h2 class="orange centered">Trusted By</h2>
  <section class="usedBy">
    {#each cms.usedBy as usedBy}
      <a rel='external' href={usedBy.url || index}><div>{usedBy.name}</div></a>
    {/each}
  </section>
</div>
