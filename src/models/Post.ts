import typegoose from '@typegoose/typegoose'

// Due to typegoose is a CommonJS module, we're not using CommonJS modules
const { getModelForClass, modelOptions, prop } = typegoose

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
class Image {
  @prop()
  url!: string

  @prop()
  public_id!: string
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Post {
  @prop({ required: true, trim: true })
  title!: string

  @prop({ required: true, trim: true })
  description!: string

  @prop({ type: () => Image })
  image?: Image
}

const PostModel = getModelForClass(Post)

export default PostModel
