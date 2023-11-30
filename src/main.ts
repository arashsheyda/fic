import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { router } from './router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'


// Creating a Pinia store instance
const pinia = createPinia()
// Using the Pinia plugin for state persistence
pinia.use(piniaPluginPersistedstate)

createApp(App)
  // Adding the router instance to the app
  .use(router)
    // Adding the Pinia store instance to the app
  .use(pinia)
    // Mounting the app to the element with the ID 'app'
  .mount('#app')
