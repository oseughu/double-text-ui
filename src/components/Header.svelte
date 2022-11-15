<script>
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import { user } from '../stores'
  import Spinner from './Spinner.svelte'

  let message
  let currentPage = $page.url.pathname

  export let navBarText,
    navBarLink = []

  onMount(async () => {
    try {
      const response = await fetch('/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })

      const content = await response.json()

      user.set(content)
      message = `Hi, ${content.name}`
    } catch (error) {
      message = 'You are not logged in'
      user.set({})
    }
  })

  const logout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
      {#if currentPage !== '/' && currentPage !== '/register' && currentPage !== '/login'}
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="/posts">Posts</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" href="/posts/new">New Post</a>
          </li>
        </ul>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <ul class="nav navbar-nav navbar-right">
          {#if message === undefined}
            <li class="nav-item"
              ><a href="javascript:void(0)" class="nav-link active"><Spinner /></a></li>
          {:else}
            <li class="nav-item"
              ><a href="javascript:void(0)" class="nav-link active">{message}</a></li>
          {/if}
          <li class="nav-item">
            <a href="javascript:void(0)" on:click={logout} class="nav-link active">Logout</a></li>
        </ul>
      {:else}
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a href={navBarLink[0]} class="nav-link active">{navBarText[0]}</a>
          </li>

          <li class="nav-item"
            ><a href={navBarLink[1]} class="nav-link active">{navBarText[1]}</a></li>
        </ul>
      {/if}
    </div>
  </div></nav>
