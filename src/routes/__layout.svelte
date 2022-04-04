<script lang="ts">
  import { user } from '$lib/supabase'
  import '../app.css'
</script>

<slot />

{#if $user}
  <!-- Appzi: Capture Insightful Feedback -->
  <script async src="https://w.appzi.io/w.js?token=LWNsU"></script>
  <!-- End Appzi -->
{/if}

<style lang="sass">
  :global(html)
    height: 100%
  :global(body)
    color: #21242c
    height: 100%
    background-color: rgb(241, 245, 249)
</style>
