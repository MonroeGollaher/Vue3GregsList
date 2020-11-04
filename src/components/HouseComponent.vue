<template>
  <div class="house-component col-2 card shadow-lg">
    <img :src="houseProp.imgUrl" alt="" class="img-fluid">
    <h2>${{houseProp.price}} Year: {{houseProp.year}}</h2>
    <p>{{ houseProp.description }}</p>
  </div>

</template>

<script>
export default {
  name: 'HouseComponent',
  props: ['houseProp'],
  setup(props) {
    return {

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
