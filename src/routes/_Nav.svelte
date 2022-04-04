<script lang="ts">
  export let loggedIn = false
</script>

<nav class="flex h-16 flex-shrink-0 items-center border-b border-slate-200 px-6 font-medium">
  <a href="/" class="flex text-center text-xl font-medium">Home</a>
  {#if loggedIn}
    <button class="ml-6" type="button">Log out</button>
  {:else}
    Not logged in
  {/if}
</nav>
