import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store/index'

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
