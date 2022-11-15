<script>
  import Header from '$components/Header.svelte'
</script>

<Header navBarText={['Login', 'Sign Up']} navBarLink={['/login', '/register']} />

<div class="container text-center mt-4">
  <h1>
    <a href="/login">Login</a> or <a href="/register">Sign Up</a>
    to get started
  </h1>
</div>
