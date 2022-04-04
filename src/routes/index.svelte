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
  <img src="/image.jpg" alt="" />
</div>

<p>Section 3</p>
