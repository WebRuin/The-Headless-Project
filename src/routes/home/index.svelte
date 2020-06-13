<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`headlessCmss.json`).then(r => r.json()).then(cmss => {
			return { cmss };
		});
	}
</script>

<script>
	export let headlessCmss;
	console.log(`home/index: ${{headlessCmss}}`)
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>The Headless Project</title>
</svelte:head>

<h1>The Headless Project</h1>

<ul>
	{#each headlessCmss as cms}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{cms.slug}'>{cms.title}</a></li>
	{/each}
</ul>