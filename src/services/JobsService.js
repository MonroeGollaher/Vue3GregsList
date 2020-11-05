import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
// import router from '../router'

class JobsService {
  async getAllJobs() {
    try {
      const res = await api.get('/jobs')
      console.log(res.data.data)
      AppState.jobs = res.data.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobsService = new JobsService()
