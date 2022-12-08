import { createApp } from 'vue';

import store from './store';

import App from './App.vue';

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

// Mount the app
app.mount('#app');
