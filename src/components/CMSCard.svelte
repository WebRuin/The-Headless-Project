<script context="module">
  /**
   * It would be ideal to handle this with the `URL` API , but
   * values are currently stored in an incompatible format, so I'm just
   * splitting the "hostname" off of the value, which is fragile.
   */
  export const getHostname = url => url.split("//")[1];
</script>

<script>
  export let service;
</script>

<article class="px-2 mb-4 md:max-w-1/2">
  <div class="flex flex-col h-full shadow rounded overflow-hidden bg-white">
    <div class="flex-auto p-8">
      <h2 class="text-xl text-primary">{service.name}</h2>
      <p class="text-sm text-gray-600">{service.heading}</p>
      <p class="my-4">{service.description}</p>

      <ul class="text-xs font-medium capitalize text-gray-600">
        <li>
          <span class="inline-block w-4 text-gray-700">
            <i class="fa fa-calendar-o" aria-hidden="true" />
          </span>
          {service.billing} billing
        </li>
        <li>
          <span class="inline-block w-4 text-gray-700">
            <i class="fa fa-credit-card" aria-hidden="true" />
          </span>
          {service.creditCardNeeded ? '' : 'no '} card required
        </li>
      </ul>
    </div>

    <div
      class="flex justify-end border-t border-solid border-gray-300 bg-white
      divide-x divide-gray-300 text-sm lg:text-base">
      <a
        class="flex-1 p-4 text-center hover:bg-gray-100"
        href={service.slug.current}
        rel="prefetch">
        More detail
      </a>
      <a
        class="flex-1 p-4 text-center hover:bg-gray-100"
        href={service.url}
        rel="nofollow noopener noindex"
        target="_blank">
        Visit {getHostname(service.url)}
      </a>
    </div>
  </div>
</article>
