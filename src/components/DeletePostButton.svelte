<script>
  import { user } from '$/stores'
  import { PUBLIC_API_URL } from '$env/static/public'
  import MdDelete from 'svelte-icons/md/MdDelete.svelte'

  export let post

  const deletePost = async () => {
    if ($user.name === undefined) {
      await goto('/login')
    } else {
      await fetch(`${PUBLIC_API_URL}/posts/${post._id}/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      location.reload()
    }
  }
</script>

{#if $user._id === post.author._id}
  <form class="grid-child" on:submit|preventDefault={deletePost}>
    <button class="btn btn-danger del" type="submit"><MdDelete /></button>
  </form>
{/if}
