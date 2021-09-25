import { AppState } from '../AppState.js'
import { Pic } from '../Models/Pic.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class PicsService {
  async getPics() {
    const res = await api.get('api/ads')
    logger.error('pics', res)
    AppState.pics = res.data.map(a => new Pic(a))
  }
}

export const picsService = new PicsService()
