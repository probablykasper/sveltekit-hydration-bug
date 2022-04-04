<script>
  import { user, userInitialized } from "$lib/supabase";
  import Nav from "./_Nav.svelte";
</script>

<Nav loggedIn={!!$user && userInitialized} />

<p>Section 1</p>

<div class="pb-8 sm:pb-12 lg:pb-12">
  <p>Section 2</p>
  {#if !$user}
    <p>Log in</p>
  {/if}
  <div>
    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div
        class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
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
