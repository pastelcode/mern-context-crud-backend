import { config } from 'dotenv'

config()

export const mongoURI =
  process.env['MONGODB_URI'] || 'mongodb://localhost/mern-context-crud'

export const port = process.env['PORT'] || 4000

export const cloudinaryCloud = process.env['CLOUDINARY_CLOUD'] || 'pastel'

export const cloudinaryAPISecret = process.env['CLOUDINARY_API_SECRET'] || ''

export const cloudinaryAPIKey = process.env['CLOUDINARY_API_KEY'] || ''
