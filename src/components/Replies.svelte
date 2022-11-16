<script>
  import { user } from '$/stores'
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
    <a
      href={$user.name === undefined
        ? '/login'
        : `/posts/${post._id}/comments/${reply._id}/replies/new`}>Reply</a>
    <hr />
  </div>
{/each}
