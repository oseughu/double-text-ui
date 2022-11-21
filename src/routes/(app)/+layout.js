import { PUBLIC_API_URL } from '$env/static/public'

export async function load({ fetch }) {
  const response = await fetch(`${PUBLIC_API_URL}/user`, {
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const user = await response.json()

  return {
    user
  }
}
