import mongoose from 'mongoose'
import { mongoURI } from './config.js'

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(mongoURI)
    console.log(`Database is connected to ${db.connection.name}`)
  } catch (error) {
    console.error(error)
  }
}
