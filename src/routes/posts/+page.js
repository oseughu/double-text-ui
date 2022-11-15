export async function load({ fetch }) {
  const response = await fetch('https://double-text.onrender.com/api/posts')

  const content = await response.json()

  return {
    posts: content.posts
  }
}
