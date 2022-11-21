<script>
  import { user } from '$/stores'
  import { goto } from '$app/navigation'
  import { PUBLIC_API_URL } from '$env/static/public'
  import MdDelete from 'svelte-icons/md/MdDelete.svelte'

  export let post
  export let comment

  const deleteComment = async () => {
    if ($user.name === undefined) {
      await goto('/login')
    } else {
      await fetch(`${PUBLIC_API_URL}/posts/${post._id}/comments/${comment._id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      location.reload()
    }
  }
</script>

{#if $user._id === post.author._id || $user._id === comment.author._id}
  <form on:submit|preventDefault={deleteComment}>
    <button class="btn btn-danger del" type="submit"><MdDelete /></button>
  </form>
{/if}

<style>
  .del {
    height: 40px;
    width: 60px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
</style>
