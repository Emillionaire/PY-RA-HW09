import { Link } from 'react-router-dom'
import type { PostType } from '../Posts/Posts'
import './Post.css'

type PostProps = {
  post: PostType
}

function Post ({ post }: PostProps): JSX.Element {
  return (
        <Link to={`/posts/${post.id}`} className="post">
            <div>{new Date(post.created).toISOString()}</div>
            <p>{post.content}</p>
        </Link>
  )
}

export default Post
