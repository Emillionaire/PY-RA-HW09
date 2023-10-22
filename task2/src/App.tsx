import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts, { loader as postsLoader } from './components/Posts/Posts'
import CreatePost, { action as createPostAction } from './components/CreatePost'
import PostDetailed, { loader as postDetailedLoader } from './components/Post/PostDetailed'
import PostEdit, { action as postEditAction } from './components/Post/PostEdit'
import { action as postDeleteAction } from './components/Post/PostDelete'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />,
    loader: postsLoader
  },
  {
    path: '/new',
    element: <CreatePost />,
    action: createPostAction
  },
  {
    path: '/posts/:id',
    element: <PostDetailed />,
    loader: postDetailedLoader
  },
  {
    path: '/posts/:id/edit',
    element: <PostEdit />,
    loader: postDetailedLoader,
    action: postEditAction
  },
  {
    path: '/posts/:id/delete',
    action: postDeleteAction
  }
])

function App (): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}

export default App
