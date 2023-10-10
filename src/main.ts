

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/theme.css";
import plugin from '@/components/basic-components'
const app = createApp(App);
app.use(router);
app.use(store);
// app.directive("loding", loding);
// app.directive("butloding", butloding);
app.use(plugin);
app.mount("#app");

