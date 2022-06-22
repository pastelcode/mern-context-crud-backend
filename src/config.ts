import { config } from 'dotenv'

config()

export const mongoURI =
  process.env['MONGODB_URI'] || 'mongodb://localhost/mern-context-crud'

export const port = process.env['PORT'] || 4000
