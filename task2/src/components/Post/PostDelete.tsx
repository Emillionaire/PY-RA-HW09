import { type Params, redirect } from 'react-router-dom'

async function action ({ params }: { params: Params<'id'> }): Promise<Response> {
  await fetch(`http://localhost:7070/posts/${params.id}`, {
    method: 'DELETE'
  })

  return redirect('/')
}

export { action }
