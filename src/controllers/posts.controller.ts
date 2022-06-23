import type { RequestHandler } from 'express'
import type { UploadedFile } from 'express-fileupload'
import httpStatus from 'http-status'
import fs from 'fs-extra'
import { deleteImage, uploadImage } from '../libs/cloudinary.js'
import Post, { Image } from '../models/Post.js'

export const getPosts: RequestHandler = async (_req, res) => {
  try {
    const posts = await Post.find()
    return res.status(httpStatus.OK).send(posts)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}

export const getPost: RequestHandler = async (req, res) => {
  const { postId } = req.params
  try {
    const post = await Post.findById(postId)
    if (!post) {
      return res.status(httpStatus.NOT_FOUND).send()
    }
    return res.status(httpStatus.OK).send(post)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}

export const createPost: RequestHandler = async (req, res) => {
  const { title, description } = req.body

  let fileToUpload: UploadedFile | UploadedFile[] | undefined
  if (req.files) {
    fileToUpload = req.files['image']
  }

  try {
    let image: Image | null = null
    let fileToUploadTempPath: string | null = null
    if (fileToUpload) {
      fileToUploadTempPath = (fileToUpload as UploadedFile).tempFilePath
      const { secure_url, public_id } = await uploadImage({
        filePath: fileToUploadTempPath,
      })
      await fs.remove(fileToUploadTempPath)
      image = new Image({ url: secure_url, publicId: public_id })
    }

    const { id } = await Post.create({
      title,
      description,
      image,
    })

    return res.status(httpStatus.CREATED).send(id)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}

export const updatePost: RequestHandler = async (req, res) => {
  const { postId } = req.params
  const { title, description } = req.body
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, description },
      { new: true }
    )
    if (!updatedPost) {
      return res.status(httpStatus.NOT_FOUND).send()
    }
    return res.status(httpStatus.OK).send()
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}

export const deletePost: RequestHandler = async (req, res) => {
  const { postId } = req.params
  try {
    const deletedPost = await Post.findByIdAndDelete(postId)

    if (!deletedPost) {
      return res.status(httpStatus.NOT_FOUND).send()
    }

    if (deletedPost.image) {
      const { publicId } = deletedPost.image
      await deleteImage({ publicId })
    }

    return res.status(httpStatus.OK).send()
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}
