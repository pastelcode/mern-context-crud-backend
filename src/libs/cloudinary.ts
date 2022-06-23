import { v2 as cloudinary } from 'cloudinary'
import {
  cloudinaryAPIKey,
  cloudinaryAPISecret,
  cloudinaryCloud,
} from '../config.js'

cloudinary.config({
  cloud_name: cloudinaryCloud,
  api_key: cloudinaryAPIKey,
  api_secret: cloudinaryAPISecret,
  secure: true,
})

export const uploadImage = async (filePath: string) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'mern-context-crud',
  })
}
