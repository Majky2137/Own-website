import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MotionPlugin } from "@vueuse/motion";
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(MotionPlugin).use(router).mount("#app");
