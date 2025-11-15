import { createApp } from 'vue'
import App from './App.vue'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
import './style.css'

const app = createApp(App)
app.use(VueSnap)
app.mount('#app')

