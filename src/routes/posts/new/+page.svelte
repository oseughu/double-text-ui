<script>
  import { goto } from '$app/navigation'
  import Header from '$components/Header.svelte'
  import { PUBLIC_API_URL } from '$env/static/public'

  let title,
    content = ''

  const submit = async () => {
    await fetch(`${PUBLIC_API_URL}/posts/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://double-text.vercel.app'
      },
      credentials: 'include',
      body: JSON.stringify({
        title,
        content
      })
    })

    await goto('/posts')
  }
</script>

<Header />

<div class="container mt-4">
  <h1 class="mt-4 mb-4">New Post</h1>

  <form class=" form-group" on:submit|preventDefault={submit}>
    <div class="mb-3">
      <label class="form-label" for="title">Title</label>
      <input bind:value={title} type="text" class="form-control" placeholder="Title" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="content">Body</label>
      <textarea bind:value={content} class="form-control" placeholder="Write Something 🤨" />
    </div>

    <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
  </form>
</div>
