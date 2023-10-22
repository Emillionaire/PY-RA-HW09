import { Form, useLoaderData, useNavigate, redirect, type Params } from 'react-router-dom'
import { useState } from 'react'
import { type PostType } from '../Posts/Posts'

async function action ({ request, params }: { request: Request, params: Params<'id'> }): Promise<Response> {
  const formData = await request.formData()
  const content = formData.get('content')
  await fetch(`http://localhost:7070/posts/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: params.id, content })
  })

  return redirect(`/posts/${params.id}`)
}

function PostEdit (): JSX.Element {
  const { post } = useLoaderData() as { post: PostType }
  const [content, setContent] = useState(post.content)
  const navigate = useNavigate()

  return (
    <Form method="PUT" className="post">
      <input name="content" value={content} onChange={(e) => { setContent(e.target.value) }} />
      <button type="submit">submit</button>
      <button type="button" onClick={() => { navigate(-1) }}>go back</button>
    </Form>
  )
}

export default PostEdit
export { action }
