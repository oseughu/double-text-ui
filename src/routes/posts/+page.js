export async function load({ fetch }) {
  const response = await fetch('/api/posts')

  const content = await response.json()

  return {
    posts: content.posts
  }
}
