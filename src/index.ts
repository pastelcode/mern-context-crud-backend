import app from './app.js'
import { port } from './config.js'
import { connectDB } from './db.js'

connectDB()

app.listen(port)
console.log(`Server on port ${port}`)
