type PostCategory = {
  id: number
  slug: string
  name: string
}

type Post = {
  id: number,
  title: string,
  excerpt: string,
  headline: string,
  slug: string,
  featured_media: {
    medium: string,
    thumbnail: string,
    'big-size': string,
    '1536x1536': string,
    'mid-size': string,
    medium_large: string
    'web-stories-publisher-logo': string
  },
  categories: PostCategory[],
  content: string,
  author: {
    id: number,
    name: string
  },
  published: string,
  modified: string,
  bibliography: string,
  metas: {
    [key: string]: string | number
  }
}

type Posts = Omit<Post, ['content', 'author', 'published', 'bibliography', 'modified']>[]
