import { API_URL } from '$env/static/public'

export async function load({ fetch }) {
  const response = await fetch(`${API_URL}/posts`)

  const content = await response.json()

  return {
    posts: content.posts
  }
}
