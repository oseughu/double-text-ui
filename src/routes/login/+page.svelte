<script>
  import { goto } from '$app/navigation'
  import Header from '$components/Header.svelte'
  import { PUBLIC_API_URL } from '$env/static/public'

  let email,
    password = ''

  const submit = async () => {
    const res = await fetch(`${PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })

    if (res.status === 200) {
      await goto('/posts')
    } else {
      alert('invalid email or password')
    }
  }
</script>

<Header navBarText={['Home', 'Sign Up']} navBarLink={['/', '/register']} />

<div class="container mt-4">
  <h1 class="mb-4 mt-4">Login</h1>

  <form class="form-group" on:submit|preventDefault={submit}>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input bind:value={email} type="email" class="form-control" />
      <label class="form-label" for="email">Email</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input bind:value={password} type="password" class="form-control" />
      <label class="form-label" for="password">Password</label>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">Login</button>
  </form>
</div>
