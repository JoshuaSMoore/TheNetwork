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
    AppState.older = res.data.older
    AppState.newer = res.data.newer
    AppState.postsData = res.data
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    AppState.posts.unshift(new Post(res.data))
  }

  async findPostsByQuery(query = {}) {
    const res = await api.get(`api/posts/?query=${query}`)
    logger.log(res, 'pages')
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async getOlderPost() {
    AppState.posts = []
    AppState.postsData = {}
    AppState.currentPage++
    const res = await api.get(`api/posts?page=${AppState.currentPage}`)
    logger.log(res, 'older')
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async getNewPost() {
    AppState.posts = []
    AppState.postsData = {}
    AppState.currentPage--
    const res = await api.get(`api/posts?page=${AppState.currentPage}`)
    AppState.postsData = res.data
    logger.log(res, 'newpage')
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
