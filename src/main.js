import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "@/assets/fonts/fonts.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
  locale: {
        locale: 'fa',
        rtl: {
          fa: true, 
        },
      },
  defaults: {
    global: {
      style: {
        fontFamily: "IranYekan, sans-serif",
      },
    },
  },
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
