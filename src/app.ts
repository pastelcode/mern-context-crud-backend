import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'

import postsRoutes from './routes/posts.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(fileUpload({ useTempFiles: true }))

app.use(postsRoutes)

export default app
