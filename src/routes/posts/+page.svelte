<script>
  import Header from '$components/Header.svelte'
  import Post from '$components/Post.svelte'

  export let data
</script>

<Header />

<div class="container mt-4">
  <h1 class="mb-4 mt-4">Posts</h1>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      <ul>
        {#each data.posts as post}
          <Post {post} />
        {/each}
      </ul>
    </div>
  </div>
</div>
