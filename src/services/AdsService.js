import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AdsService {
  async getAds() {
    try {
      const res = await api.get('api/ads')
      AppState.ads = res.data
    } catch (error) {
      logger.error('ads', error)
    }
  }
}

export const adsService = new AdsService()
