<template>
  <div class="hello">
    <button class="btn" @click="toggleClock = !toggleClock">Toggle Clock</button>
    <h1 v-if="toggleClock">{{time24}}</h1>
    <h1 v-else>{{time12}}</h1>
    <h5>Celcius: {{tempC}}</h5>
    <h5>Farenheit: {{tempF}}</h5>
    <h3>Sunrise: {{sunrise}}</h3>
    <h3>Sunset: {{sunset}}</h3>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'HelloWorld',
    mounted() {
      this.$store.dispatch('getImage')
      this.$store.dispatch('getWeather')
      setInterval(this.update, 1000)
    },
    data() {
      return {
        time24: '',
        time12: '',
        toggleClock: false
      }
    },
    computed: {
      tempC(){
        return this.$store.state.tempC
      },
      tempF(){
        return this.$store.state.tempF
      },
      sunrise(){
        return moment(this.$store.state.sunrise).format("h:mm a")
      },
      sunset(){
        return moment(this.$store.state.sunset).format("h:mm [pm]")
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

</style>