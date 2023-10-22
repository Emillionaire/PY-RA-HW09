import { useState } from 'react'
import { useNavigate, Form, redirect } from 'react-router-dom'

async function action ({ request }: { request: Request }): Promise<Response> {
  const formData = await request.formData()
  const content = formData.get('content')
  await fetch('http://localhost:7070/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: 0, content })
  })

  return redirect('/')
}

function CreatePost (): JSX.Element {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  return (
    <Form method='POST' className="add-new-post">
      <div>Create Post</div>
      <input type="text" name='content' value={text} onChange={e => { setText(e.target.value) }} />
      <button type="submit">Submit</button>
      <button type='button' onClick={() => { navigate(-1) }}>go back</button>
    </Form>
  )
}

export default CreatePost
export { action }
