<template>
  <div class="house-component col-3 card shadow-lg">
    <img :src="houseProp.imgUrl" alt="" class="img-fluid">
    <h2>${{ houseProp.price }} </h2>
    <h4>Year: {{ houseProp.year }}</h4>
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
