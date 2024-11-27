import { createApp } from "vue";

// Vuetify
// import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { aliases, fa } from "vuetify/iconsets/fa";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import router from "./router";
// Components
import App from "./App.vue";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "myCustomTheme",
        themes: {
            myCustomTheme: {
                dark: false,
                variables: {},
                
            },
        },
        icons: {
            defaultSet: "fa",
            aliases,
            sets: {
                fa,
            },
        },
    },
    
});

const app = createApp(App);
app.use(vuetify);
// app.use(router);
app.use(createPinia());
app.mount("#app");
