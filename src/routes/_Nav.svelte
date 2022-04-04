<script>
  export let loggedIn = false;
</script>

<nav>
  <a href="/">Home</a>
  {#if loggedIn}
    <button type="button">Log out</button>
  {:else}
    Not logged in
  {/if}
</nav>
