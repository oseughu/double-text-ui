<script>
  import { user } from '$/stores'
  import { goto } from '$app/navigation'
  export let postId
  let content

  const addComment = async () => {
    if ($user.name === undefined) {
      await goto('/login')
    } else {
      await fetch(`/api/posts/${postId}/comments`, {
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
      <textarea class="form-control" name="content" bind:value={content} />
    </div>

    <button class="btn btn-secondary" type="submit">Reply</button>
  </form>
</div>
