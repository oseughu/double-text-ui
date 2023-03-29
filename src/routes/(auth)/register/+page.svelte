<script>
  import { goto } from '$app/navigation'
  import { PUBLIC_API_URL } from '$env/static/public'

  let name,
    email,
    password,
    confirmPassword = ''

  const validity = (node, val) => {
    if (!!val) node.setCustomValidity(val)
    return {
      update(newVal) {
        node.setCustomValidity(newVal ? newVal : '')
      }
    }
  }

  const submit = async () => {
    const res = await fetch(`${PUBLIC_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    if (res.status === 201) {
      await goto('/login')
    } else {
      alert('error registering user. please check all fields and try again.')
    }
  }
</script>

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

    <!-- Confirm Password -->
    <div class="form-outline mb-4">
      <input
        bind:value={confirmPassword}
        use:validity={confirmPassword !== password ? "Passwords don't match" : ''}
        type="password"
        class="form-control"
        required />
      <label class="form-label" for="password">Confirm Password</label>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
  </form>
</div>
