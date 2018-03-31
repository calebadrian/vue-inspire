<template>
  <div class="hello">
    <button class="btn" @click="toggleClock = !toggleClock">Toggle Clock</button>
    <h1 v-if="toggleClock">{{time24}}</h1>
    <h1 v-else>{{time12}}</h1>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'HelloWorld',
    mounted() {
      setInterval(this.update, 1000)
    },
    data() {
      return {
        time24: '',
        time12: '',
        toggleClock: false
      }
    },
    methods: {
      update() {
        this.time24 = moment().format("HH:mm:ss")
        this.time12 = moment().format("h:mm:ss a")
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>