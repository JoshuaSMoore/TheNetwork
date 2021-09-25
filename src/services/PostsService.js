import { AppState } from '../AppState.js'
import { Post } from '../models/Post.js'
import { logger } from '../utils/Logger.js'
import { convertToQuery } from '../utils/Query.js'
import { api } from './AxiosService'
class PostsService {
  async getPosts(query = {}) {
    AppState.posts = []
    logger.log('query', query)
    const res = await api.get('api/posts' + convertToQuery(query))
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    AppState.posts.unshift(new Post(res.data))
  }

  async deleteBlog(postId) {
    const res = await api.delete('api/posts/' + postId)
    logger.log('delete res', res)
    AppState.posts = AppState.posts.filter(p => p.id !== postId)
  }

  async findPostsByQuery(query = {}) {
    const res = await api.get(`api/posts/?query=${query}`)
    AppState.newer = res.data.newer
    AppState.older = res.data.older
    logger.log(res, 'pages')
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async getOlderPost(older) {
    const res = await api.get('api/posts/older')
    AppState.older = res.data.older
    logger.log(res, 'older')
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getPosts()
  }

  async deletePost(postId) {
    const res = await api.delete('api/posts/' + postId)
    logger.log('delete res', res)
    AppState.posts = AppState.posts.filter(p => p.id !== postId)
  }
}

export const postsService = new PostsService()
