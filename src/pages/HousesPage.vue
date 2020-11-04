<template>
  <div class="houses-page container-fluid">
    <h1>Houses</h1>
  </div>
  <div class="row">
    <house-component v-for="house in houses" :key="house._id" :house-prop="house"/>
  </div>
</template>

<script>

import { computed, onMounted, reactive } from 'vue'
import { housesService } from '../services/HousesService'
import HouseComponent from '../components/HouseComponent'
import { AppState } from '../AppState'

export default {
  name: 'HousesPage',
  components: { HouseComponent },
  setup() {
    const state = reactive({
      newHouse: {}
    })
    onMounted(() => {
      housesService.getAllHouses()
    })
    return {
      state,
      houses: computed(() => AppState.houses),
      createHouse() {
        housesService.createHouse(state.newHouse)
      }
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
