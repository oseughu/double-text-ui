<script>
  import { user } from '$/stores'
  import { goto } from '$app/navigation'
  import { PUBLIC_API_URL } from '$env/static/public'
  export let postId
  let content

  const addComment = async () => {
    if ($user.name === undefined) {
      await goto('/login')
    } else {
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
  }
</script>

<div class="container mt-4">
  <form class="form-group" on:submit|preventDefault={addComment}>
    <div class="mb-3">
      <textarea class="form-control" name="content" bind:value={content} required minlength="8" />
    </div>

    <button class="btn btn-secondary" type="submit">Reply</button>
  </form>
</div>
