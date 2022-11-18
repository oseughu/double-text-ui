<script>
  import { user } from '$/stores'
  import DeletePostButton from '$components/DeletePostButton.svelte'
  import Vote from '$components/Vote.svelte'

  export let post

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
      <strong>{post.author.email === $user.email ? 'You' : post.author.name}</strong>
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
  <div>
    <Vote {upvotes} {downvotes} pageId={post._id} />
    <DeletePostButton {post} />
  </div>
  <hr />
</li>
