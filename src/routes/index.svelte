<script lang="ts">
  import { user, userInitialized } from '$lib/supabase'
  import Nav from './_Nav.svelte'
</script>

<Nav loggedIn={!!$user && userInitialized} />

<p>Section 1</p>

<div class="pb-8 sm:pb-12 lg:pb-12">
  <p>Section 2</p>
  <div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
    <div
      class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
    >
      <div>
        <div class="mt-20">
          <div class="mt-6 sm:max-w-xl">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Create landing pages in minutes.
            </h1>
            <p class="mt-6 text-xl text-gray-500">It's simple. It's free. It's made with love.</p>
          </div>

          <div class="mt-6">
            <div
              class="mt-6 rounded-md border border-transparent bg-lime-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-lime-700 focus:outline-none sm:px-10"
            >
              Get Started
            </div>
            <div class="mt-6 items-center divide-x divide-gray-300">
              <div class="pr-5">
                {#if !$user}
                  <p>
                    Already signed up? <span class="underline">Log in</span>
                  </p>
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div
          class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
        >
          <img
            class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
            src="/image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>

<p>Section 3</p>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          This section seems to always load
        </h2>
      </div>
    </div>
  </div>
</div>
