<script>
  import { user } from '$/stores'
  import { goto } from '$app/navigation'
  import { PUBLIC_API_URL } from '$env/static/public'
  import axios from 'axios'
  import MdDelete from 'svelte-icons/md/MdDelete.svelte'

  export let post

  const deletePost = async () => {
    if ($user.name === undefined) {
      await goto('/login')
    } else {
      const res = await axios.delete(`${PUBLIC_API_URL}/posts/${post._id}/delete`, {
        withCredentials: true
      })

      console.log(res)

      // location.reload()
    }
  }
</script>

{#if $user._id === post.author._id}
  <form class="del-form" on:submit|preventDefault={deletePost}>
    <button class="btn btn-danger del" type="submit"><MdDelete /></button>
  </form>
{/if}
