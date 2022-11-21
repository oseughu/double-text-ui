<script>
  import { page } from '$app/stores'
  import Footer from '$components/Footer.svelte'
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="navbar-brand"><strong>Double Text</strong></li>
    </ul>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          {#if $page.url.pathname === '/login'}
            <a href="/register" class="nav-link active">Sign Up</a>
          {:else if $page.url.pathname === '/register'}
            <a href="/login" class="nav-link active">Login</a>
          {/if}
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/posts">Posts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<slot />
<Footer />
