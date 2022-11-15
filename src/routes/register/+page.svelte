<script>
  import { goto } from '$app/navigation'
  import Header from '$components/Header.svelte'
  import { PUBLIC_API_URL } from '$env/static/public'

  let name = '',
    email = '',
    password = ''

  const submit = async () => {
    const res = await fetch(`${PUBLIC_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    await goto('/login')
  }
</script>

<Header navBarText={['Home', 'Login']} navBarLink={['/', '/login']} />

<div class="container mt-4">
  <h1 class="mb-4 mt-4">Sign Up</h1>

  <form on:submit|preventDefault={submit}>
    <!-- Name input -->
    <div class="form-outline mb-4">
      <input bind:value={name} class="form-control" required />
      <label class="form-label" for="name">Name</label>
    </div>

    <!-- Email input -->
    <div class="form-outline mb-4">
      <input bind:value={email} type="email" class="form-control" required />
      <label class="form-label" for="email">Email</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input bind:value={password} type="password" class="form-control" required minlength="8" />
      <label class="form-label" for="password">Password</label>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
  </form>
</div>
