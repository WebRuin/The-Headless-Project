<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<Tailwindcss />

<Header {segment} />

<main class="bg-gray-200">
  <slot />
</main>

<Footer />
