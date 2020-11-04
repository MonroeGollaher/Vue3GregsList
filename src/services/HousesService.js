import { api } from './AxiosService'
import { AppState } from '../AppState'
// import { AppState } from '../AppState'
// import router from '../router'

class HouseService {
  async getAllHouses() {
    try {
      const res = await api.get('/houses')
      AppState.houses = res.data.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HouseService()
