import { Link, useLoaderData } from 'react-router-dom'

import Post from '../Post/Post'
import './Posts.css'

type PostType = {
  id: number
  content: string
  created: number
}

async function loader (): Promise<PostType[]> {
  const response = await fetch('http://localhost:7070/posts')
  const posts: PostType[] = await response.json()
  return posts
}

function Posts (): JSX.Element {
  const posts = useLoaderData() as PostType[]

  return (
    <div className="posts">
      <Link to={'/new'}>Create Post</Link>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default Posts
export { loader }
export type { PostType }
