import { useNavigate, useLoaderData, Link, Form, type Params } from 'react-router-dom'
import type { PostType } from '../Posts/Posts'
import './Post.css'

async function loader ({ params }: { params: Params<'id'> }): Promise<PostType> {
  const response = await fetch(`http://localhost:7070/posts/${params.id}`)
  const post: PostType = await response.json()
  return post
}

function PostDetailed (): JSX.Element {
  const { post } = useLoaderData() as { post: PostType }
  const navigate = useNavigate()

  return (
    <div className="post">
      <div>id: {post.id}</div>
      <div>created: {new Date(post.created).toISOString()}</div>
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}/edit`}>edit</Link>
      <Form
        method="post"
        action="delete"
        onSubmit={(event) => { console.log(event) }}>
        <button type="submit">Delete</button>
      </Form>
      <button onClick={() => { navigate('/') }}>go back</button>
    </div>
  )
}

export default PostDetailed
export { loader }
