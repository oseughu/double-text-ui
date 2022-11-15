<script>
  import { PUBLIC_API_URL } from '$env/static/public'
  import FaArrowDown from 'svelte-icons/fa/FaArrowDown.svelte'
  import FaArrowUp from 'svelte-icons/fa/FaArrowUp.svelte'

  export let pageId
  export let upvotes
  export let downvotes

  const upVote = async () => {
    await fetch(`${PUBLIC_API_URL}/posts/${pageId}/vote-up`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include'
    })

    location.reload()
  }

  const downVote = async () => {
    await fetch(`${PUBLIC_API_URL}/posts/${pageId}/vote-down`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include'
    })

    location.reload()
  }
</script>

<div class="m-auto btn-group" role="group">
  <form on:submit|preventDefault={upVote}>
    <button type="submit" class="d-flex justify-content-center btn btn-primary vote-up"
      ><FaArrowUp /> {upvotes}</button>
  </form>

  <form on:submit|preventDefault={downVote}>
    <button type="submit" class="d-flex justify-content-center btn btn-danger vote-down"
      ><FaArrowDown /> {downvotes}</button>
  </form>
</div>
