import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

var production = !window.location.host.includes('localhost')
var baseUrl = production ? '//something.herokuapp.com/' : '//localhost:3000/'

var auth = axios.create({
    baseURL: baseUrl + 'auth/',
    timeout: 5000,
    withCredentials: true
})

var images = axios.create({
    baseURL: 'http://www.splashbase.co/api/v1/images/',
    timeout: 5000,
})

var weather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35',
    timeout: 5000
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        imgUrl: '',
        tempC: 0,
        tempF: 0,
        sunrise: 0,
        sunset: 0
    },
    mutations: {
        updateimgUrl(state, payload) {
            state.imgUrl = payload;
        },
        updateTemp(state, payload) {
            state.tempC = Math.round(payload - 273.15);
            state.tempF = Math.round((state.tempC * (9 / 5)) + 32);
        },
        updateSunrise(state, payload) {
            state.sunrise = payload;
        },
        updateSunset(state, payload) {
            state.sunset = payload;
        }
    },
    actions: {
        getImage({ commit, dispatch }, payload) {
            images.get('random')
                .then(res => {
                    commit('updateimgUrl', res.data.url)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        getWeather({ commit, dispatch }, payload) {
            weather.get('')
                .then(res => {
                    console.log(res.data)
                    commit('updateTemp', res.data.main.temp)
                    commit('updateSunrise', res.data.sys.sunrise)
                    commit('updateSunset', res.data.sys.sunset)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
})