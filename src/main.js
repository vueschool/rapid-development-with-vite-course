import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

const autoImportedModules = import.meta.globEager("./autoImports/*.js");

createApp(App).mount("#app");
