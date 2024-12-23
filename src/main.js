import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'


axios.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem("user");
        //console.warn('user from interceptor:' + user)
        if (user) {

            console.warn('token from interceptor:' + JSON.parse(user).token)
            const token = JSON.parse(user).token
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;

        if (status === 401) {
            // Handle unauthorized access
            router.push('/admin')
        } else if (status === 404) {
            // Handle not found errors
        } else {
            // Handle other errors
        }

        return Promise.reject(error);
    }
);


createApp(App).use(router).mount('#app')
