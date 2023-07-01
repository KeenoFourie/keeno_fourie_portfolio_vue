import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// css
import '@/assets/css/style.css'

// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons'

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')
