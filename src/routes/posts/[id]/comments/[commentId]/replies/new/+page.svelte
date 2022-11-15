<script>
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import Header from '$components/Header.svelte'
  import { PUBLIC_API_URL } from '$env/static/public'

  export let data

  let post,
    comment,
    content = ''

  post = data.post
  comment = data.comment

  const addReply = async () => {
    await fetch(
      `${PUBLIC_API_URL}/posts/${$page.params.id}/comments/${$page.params.commentId}/replies/new`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
        body: JSON.stringify({
          content
        })
      }
    )

    await goto(`/posts/${$page.params.id}`)
  }
</script>

<Header />

<div class="container mt-4">
  <h3 class="mt-4 mb-4"
    >Reply to {comment.author.name} on "{comment.content}" from "{post.title}"</h3>

  <form class="form-group" on:submit|preventDefault={addReply}>
    <div class="mb-3">
      <label class="form-label" for="content">Reply</label>
      <textarea class="form-control" name="content" bind:value={content} />
    </div>

    <button data-bs-dismiss="modal" class="btn btn-secondary" type="submit">Reply</button>
  </form>
</div>
