<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
    margin: 1.5rem 0 0.5rem 0;
    border-top: 1px solid #5EFF19;
    border-bottom: 1px solid #5EFF19;
  }
  .logo {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    width: 314px;
  }
  img {
    height: 80px;
  }
</style>
<header>
  <section class="logo">
    <a href=".">
      <img src="logo_light_on_dark.svg" alt="The Headless Project Logo">
    </a>
    <h1>The Headless Project</h1>
  </section>
  <Nav {segment}/>
</header>
