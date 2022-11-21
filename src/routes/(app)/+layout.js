import { PUBLIC_API_URL } from '$env/static/public'

export async function load({ fetch }) {
  const response = await fetch(`${PUBLIC_API_URL}/user`, {
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const content = await response.json()

  return {
    user: content.user
  }
}
