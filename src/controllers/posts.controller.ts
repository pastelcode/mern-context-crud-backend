import type { Handler } from 'express'

export const getPosts: Handler = (_req, res) => res.send([])

export const getPost: Handler = (_req, res) => res.send('Getting post...')

export const createPost: Handler = (_req, res) => res.send('Creating post')

export const updatePost: Handler = (_req, res) => res.send('Updating post...')

export const deletePost: Handler = (_req, res) => res.send('Deleting post...')
