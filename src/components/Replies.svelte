<script>
  import { user } from '$/stores'
  import DeleteCommentButton from '$components/DeleteCommentButton.svelte'
  export let comment
  export let post
</script>

{#each comment.replies as reply}
  <div class="col-xs-12 comment-indent">
    <p>
      {reply.content}
    </p>
    <p class="text-right">
      <strong>{reply.author.name}</strong>
    </p>
    <div>
      <a
        href={$user.name === undefined
          ? '/login'
          : `/posts/${post._id}/comments/${reply._id}/replies/new`}
        ><button class="btn btn-secondary">Reply</button>
      </a>
    </div>
    <DeleteCommentButton {post} comment={reply} />
    <hr />
  </div>
{/each}
