type PostCategory = {
  id: number
  slug: string
  name: string
}

type Post = {
  id: number,
  title: string,
  excerpt: string,
  slug: string,
  featured_media: {
    medium: string,
    thumbnail: string
  },
  categories: PostCategory[]
}

type Posts = Post[]
