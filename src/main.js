import { createApp } from 'vue';
import App from './App.vue';
import router from './Router'; // Import the router instance, not a component
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
app.use(router); // Use the router instance
app.mount('#app');
