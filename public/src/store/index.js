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

vue.use(vuex)

export default new vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        
    }
})