import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from '@/routes.ts'

const pinia = createPinia()
const app = createApp(App)

app.directive('focus', {
  mounted: (el) => el.focus(),
})

app.use(pinia)
app.use(router)
app.mount('#app')
