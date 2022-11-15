<script>
  import Vote from '$components/Vote.svelte'

  export let post

  $: voteScore = post.upVotes.length - post.downVotes.length
  $: upvotes = post.upVotes.length
  $: downvotes = post.downVotes.length
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
  <Vote {upvotes} {downvotes} pageId={post._id} />
  <hr />
</li>
