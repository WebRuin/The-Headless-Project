<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
</script>

<header class="shadow bg-white">
  <div class="container px-4 lg:px-0 mx-auto flex justify-between items-center">
    <div class="mr-8 flex items-center">
      <a class="mr-4" href=".">
        <img
          alt="The Headless Project Logo"
          class="h-10"
          src="logo_light_on_dark.svg" />
      </a>
      <h1 class="hidden md:block text-xl">The Headless Project</h1>
    </div>

    <Nav {segment} />
  </div>
</header>
