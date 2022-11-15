import { env } from '$env/static/public'

export async function load({ fetch }) {
  const response = await fetch(`${env.API_URL}/posts`)

  const content = await response.json()

  return {
    posts: content.posts
  }
}
