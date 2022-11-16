<script>
  import { user } from '$/stores'
  import Vote from '$components/Vote.svelte'
  import { PUBLIC_API_URL } from '$env/static/public'
  import MdDelete from 'svelte-icons/md/MdDelete.svelte'

  export let post

  const deletePost = async () => {
    const res = await fetch(`${PUBLIC_API_URL}/posts/${post._id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    if (res.status === 200) {
      location.reload()
    } else {
      alert('error deleting post, please try again.')
    }
  }

  $: upvotes = post.upVotes.length
  $: downvotes = post.downVotes.length
  $: voteScore = upvotes - downvotes
</script>

<li class="list-group-item">
  <div class="lead">
    <a href={`posts/${post._id}`}>
      {post.title}
    </a>
  </div>
  <div>
    <small>
      <strong>{post.author.name}</strong>
    </small>
  </div>
  <div>
    {#if post.comments.length <= 0}
      No Comments
    {:else}
      {post.comments.length}
      {post.comments.length > 1 ? 'comments' : 'comment'}
    {/if}
  </div>
  <div>
    Vote Score: {voteScore}
  </div>
  <div class="d-flex justify-content-center">
    <Vote {upvotes} {downvotes} pageId={post._id} />
    {#if $user._id === post.author._id}
      <button on:click={deletePost} class="btn btn-danger del"><MdDelete /></button>
    {/if}
  </div>
  <hr />
</li>

<style>
  .del {
    width: 32px;
    height: 32px;
  }
</style>
