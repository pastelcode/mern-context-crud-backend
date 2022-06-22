import express from 'express'
import morgan from 'morgan'

import postsRoutes from './routes/posts.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(postsRoutes)

export default app
