<script>
  import cn from "classnames";
  export let service;
  // export let segment;
</script>

<div class="p-4">
  <div class="flex justify-between items-center">
    <div class="w-3/4">
      <div>
        <a
          class="flex items-center text-primary text-lg font-medium"
          rel="nofollow noopener noindex"
          target="_blank"
          href={service.url}>
          <h2>{service.name}</h2>
          <i
            class="fas fa-external-link-alt ml-1 text-xs text-gray-400"
            style="transform: translateY(-25%)" />
        </a>
        <p class="text-sm text-gray-700">{service.description}</p>
      </div>
      <ul class="mt-4 text-xs text-gray-600 font-medium capitalize">
        <li class="inline mr-4">
          <span class="inline-block w-4 text-gray-700">
            <i class="fa fa-calendar-o" aria-hidden="true" />
          </span>
          {service.billing} billing
        </li>
        {#if service.creditCardNeeded}
          <li class="inline">
            <span class="inline-block w-4 text-gray-700">
              <i class="fa fa-credit-card" aria-hidden="true" />
            </span>
            card required
          </li>
        {/if}
      </ul>
    </div>

    <div>
      <a
        class="flex justify-center items-center w-8 h-8 text-gray-400
        hover:text-primary"
        href={service.slug.current}>
        <i class="fas fa-angle-right" />
      </a>
    </div>
  </div>
</div>
