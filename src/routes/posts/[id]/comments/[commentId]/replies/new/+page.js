export async function load({ fetch, params }) {
  const response = await fetch(`/api/posts/${params.id}/comments/${params.commentId}`)

  const content = await response.json()

  return {
    post: content.post,
    comment: content.comment
  }
}
