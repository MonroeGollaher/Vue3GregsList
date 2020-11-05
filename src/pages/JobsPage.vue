<template>
  <div class="jobs-page container-fluid">
    <h2>Jobs</h2>
    <form class="form-group" @submit.prevent="createJob">
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Job Title"
             v-model="state.newJob.jobTitle"
      >
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Company Name"
             v-model="state.newJob.company"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Hours"
             v-model="state.newJob.hours"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Salary"
             v-model="state.newJob.rate"
      >
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Description"
             v-model="state.newJob.description"
      >
      <button type="submit" class="btn btn-info">
        Add Job
      </button>
    </form>
  </div>
  <div class="row">
    <job-component v-for="job in jobs" :key="job._id" :job-prop="job"/>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import JobComponent from '../components/JobComponent'
import { AppState } from '../AppState'
import { jobsService } from '../services/JobsService'
export default {
  name: 'JobsPage',
  components: { JobComponent },
  setup() {
    const state = reactive({
      newJob: {}
    })
    onMounted(() => {
      jobsService.getAllJobs()
    })
    return {
      state,
      houses: computed(() => AppState.jobs),
      createHouse() {
        jobsService.createJob(state.newJob)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
