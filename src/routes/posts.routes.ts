import { Router } from 'express'

const router = Router()

router.get('/posts', (_req, res) => res.send([]))

router.get('/posts/:postId', (_req, res) => res.send('Getting post...'))

router.post('/posts', (_req, res) => res.send('Creating post'))

router.put('/posts/:postId', (_req, res) => res.send('Updating post...'))

router.delete('/posts/:postId', (_req, res) => res.send('Deleting post...'))

export default router
