import type { Handler } from 'express'
import httpStatus from 'http-status'
import Post from '../models/Post.js'

export const getPosts: Handler = async (_req, res) => {
  try {
    const posts = await Post.find()
    return res.status(httpStatus.OK).send(posts)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}

export const getPost: Handler = async (req, res) => {
  const { postId } = req.params
  try {
    const post = await Post.findById(postId)
    if (post === null) {
      return res.status(httpStatus.NOT_FOUND).send()
    }
    return res.status(httpStatus.OK).send(post)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}

export const createPost: Handler = async (req, res) => {
  const { title, description } = req.body
  try {
    const { id } = await Post.create({ title, description })
    return res.status(httpStatus.CREATED).send(id)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}

export const updatePost: Handler = (_req, res) => res.send('Updating post...')

export const deletePost: Handler = (_req, res) => res.send('Deleting post...')
