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
