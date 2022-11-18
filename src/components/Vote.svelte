<script>
  import { user } from '$/stores'
  import { goto } from '$app/navigation'
  import { PUBLIC_API_URL } from '$env/static/public'
  import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte'
  import MdArrowUpward from 'svelte-icons/md/MdArrowUpward.svelte'

  export let pageId
  export let upvotes
  export let downvotes

  const upVote = async () => {
    if ($user.name === undefined) {
      await goto('/login')
    } else {
      await fetch(`${PUBLIC_API_URL}/posts/${pageId}/vote-up`, {
        method: 'PUT',
        credentials: 'include'
      })

      location.reload()
    }
  }

  const downVote = async () => {
    if ($user.name === undefined) {
      await goto('/login')
    } else {
      await fetch(`${PUBLIC_API_URL}/posts/${pageId}/vote-down`, {
        method: 'PUT',
        credentials: 'include'
      })

      location.reload()
    }
  }
</script>

<div class="m-auto btn-group" role="group">
  <form on:submit|preventDefault={upVote}>
    <button type="submit" class="d-flex justify-content-center btn btn-primary vote-up"
      ><MdArrowUpward /> {upvotes}</button>
  </form>

  <form on:submit|preventDefault={downVote}>
    <button type="submit" class="d-flex justify-content-center btn btn-danger vote-down"
      ><MdArrowDownward /> {downvotes}</button>
  </form>
</div>
