<script>
  import cn from "classnames";
  export let segment;
</script>

<nav>
  <ul class="list-none border-t-4 border-transparent text-sm font-md">
    <li class="inline-block">
      <a
        rel="prefetch"
        class={cn(
          'block border-b-4 border-solid border-transparent px-3 py-5 mx-2',
          {
            'border-primary': segment === undefined
          }
        )}
        href=".">
        Home
      </a>
    </li>
    <li class="inline-block">
      <a
        class={cn(
          'block border-b-4 border-solid border-transparent px-3 py-5 mx-2',
          {
            'border-primary': segment === 'about'
          }
        )}
        href="about">
        About
      </a>
    </li>
  </ul>
</nav>
