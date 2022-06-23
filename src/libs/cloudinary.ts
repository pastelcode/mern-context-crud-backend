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

export const uploadImage = async ({ filePath }: { filePath: string }) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'mern-context-crud',
  })
}

export const deleteImage = async ({ publicId }: { publicId: string }) => {
  return await cloudinary.uploader.destroy(publicId)
}
