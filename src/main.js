import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "sweetalert2/dist/sweetalert2.min.css";

import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
