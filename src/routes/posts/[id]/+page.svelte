<script>
  import { user } from '$/stores'
  import DeleteCommentButton from '$components/DeleteCommentButton.svelte'
  import DeletePostButton from '$components/DeletePostButton.svelte'
  import Header from '$components/Header.svelte'
  import NewCommentForm from '$components/NewCommentForm.svelte'
  import Replies from '$components/Replies.svelte'
  import Vote from '$components/Vote.svelte'

  let post
  export let data

  post = data.post
  $: upvotes = post.upVotes.length
  $: downvotes = post.downVotes.length
</script>

<Header />

<div class="container mt-4">
  <h1 class="mb-4 mt-4">
    {post.title}
  </h1>
  <div class="row">
    <div class="col-sm-6 col-sm-offset-3">
      <p>
        {post.content}
      </p>
      <p>
        <strong>Written By {post.author.name}</strong>
      </p>
      <div>
        <Vote {upvotes} {downvotes} pageId={post._id} />
        <DeletePostButton {post} />
      </div>

      <NewCommentForm postId={post._id} />
      {#if post.comments.length > 0}
        <div class="col-xs-12 mt-4">
          {#each post.comments as comment}
            <p>
              {comment.content}
            </p>
            <p class="text-right">
              <strong>{comment.author.name}</strong>
            </p>
            <div>
              <a
                href={$user.name === undefined
                  ? '/login'
                  : `/posts/${post._id}/comments/${comment._id}/replies/new`}>Reply</a>

              <DeleteCommentButton {post} {comment} />
            </div>

            <hr />
            {#if comment.replies.length > 0}
              <Replies {post} {comment} />
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
