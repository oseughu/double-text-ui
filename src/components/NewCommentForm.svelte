<script>
  import { PUBLIC_API_URL } from '$env/static/public'
  export let postId
  let content

  const addComment = async () => {
    await fetch(`${PUBLIC_API_URL}/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        content
      })
    })

    location.reload()
  }
</script>

<div class="container mt-4">
  <form class="form-group" on:submit|preventDefault={addComment}>
    <div class="mb-3">
      <textarea class="form-control" name="content" bind:value={content} />
    </div>

    <button class="btn btn-secondary" type="submit">Reply</button>
  </form>
</div>
