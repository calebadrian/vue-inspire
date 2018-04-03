<template>
  <div id="app" :style="{backgroundImage: 'url(' + imgUrl + ')'}">

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      imgUrl() {
        return this.$store.state.imgUrl
      }
    }
  }
</script>

<style>
  body {
    height: 100vh;
    margin: 0;
  }
  #app {
    height: 100%;
    background-size: cover;
  }
</style>