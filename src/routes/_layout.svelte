<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	// import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 95vw;
		background-color: #161d20;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Header />
<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
	<Footer {segment}/>
</main>