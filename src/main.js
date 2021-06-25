import {createApp} from 'vue'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import store from './store'
import router from './router/index'

createApp(App).use(store).use(router).mount('#app')
