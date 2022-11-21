<script>
  import { user } from '$/stores'
  import { goto } from '$app/navigation'
  import Footer from '$components/Footer.svelte'
  import Spinner from '$components/Spinner.svelte'
  import { PUBLIC_API_URL } from '$env/static/public'

  export let data
  let message

  user.set(data.user)
  message = $user.name === undefined ? 'not logged in' : `Hi, ${$user.name}`

  const logout = async () => {
    await fetch(`${PUBLIC_API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    await goto('/')
  }
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
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="/posts">Posts</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href={$user.name === undefined ? '/login' : '/posts/new'}
            >New Post</a>
        </li>
      </ul>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <ul class="nav navbar-nav navbar-right">
        {#if message === undefined}
          <li class="nav-item"
            ><a href="javascript:void(0)" class="nav-link active"><Spinner /></a></li>
        {:else if message === 'not logged in'}
          <li class="nav-item"><a href="/login" class="nav-link active">Login</a></li>
          <li class="nav-item"><a href="/register" class="nav-link active">Sign Up</a></li>
        {:else}
          <li class="nav-item"
            ><a href="javascript:void(0)" class="nav-link active">{message}</a>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" on:click={logout} class="nav-link active">Logout</a>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>

<slot />
<Footer />
