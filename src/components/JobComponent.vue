<template>
  <div class="job-component">
    <h2>{{ jobsProp.company }}</h2>
  </div>
</template>

<script>
export default {
  name: 'JobsComponent',
  props: ['jobsProp'],
  setup(props) {
    return {

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
