import { PUBLIC_API_URL } from '$env/static/public'

export async function load({ fetch, params }) {
  const response = await fetch(`${PUBLIC_API_URL}/posts/${params.id}`)

  const content = await response.json()

  return {
    post: content.post
  }
}
