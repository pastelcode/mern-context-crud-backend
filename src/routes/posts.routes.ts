import { Router } from 'express'
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/posts.controller.js'

const router = Router()

router.get('/posts', getPosts)

router.get('/posts/:postId', getPost)

router.post('/posts', createPost)

router.put('/posts/:postId', updatePost)

router.delete('/posts/:postId', deletePost)

export default router
