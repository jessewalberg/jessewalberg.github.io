<script>
  import Landing from './lib/Landing.svelte';
  import Success from './lib/Success.svelte';

  let showLanding = true;
  let showSuccess = false;

  function toggle() {
    showSuccess = !showSuccess;
    showLanding = !showLanding;
  }
</script>

<main>
  {#if showLanding}
  <Landing {toggle}/>
  {/if}
  {#if showSuccess}
    <Success {toggle}/>
  {/if}
</main>

<style>

</style>
