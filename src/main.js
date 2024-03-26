import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import { registerPlugins } from '@/plugins'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)

library.add(fas);

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
// registerPlugins(app)

app.mount('#app')
