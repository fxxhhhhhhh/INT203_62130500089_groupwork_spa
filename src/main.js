import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseNavBar from './components/BaseNavBar.vue'

const app = createApp(App);
app.component('base-nav-bar', BaseNavBar);
app.use(router).mount("#app");