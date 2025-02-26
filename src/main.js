import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import { createHead } from '@vueuse/head'


axios.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem("user");
        //console.warn('user from interceptor:' + user)
        if (user) {

            //console.warn('token from interceptor:' + JSON.parse(user).token)
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
            // const user = localStorage.getItem(user);
            // if (user) {
            //     const refreshTkn = JSON.parse(user).refreshToken
            //     refreshToken({ "refreshToken": refreshTkn }).then(res => {
            //         if (res.code == 200) {
            //             localStorage.setItem('user', JSON.stringify(res))
            //             return axios(error.config)
            //         } else {
            //             router.push('/admin')
            //         }
            //     })
            // } else {
            //     router.push('/admin')
            // }
            localStorage.clear('user')
            router.push('/admin')
        } else if (status === 404) {
            router.push('/')
        } else {
            // Handle other errors
        }

        return Promise.reject(error);
    }
);

const head = createHead()

createApp(App)
    .use(router)
    .use(head)
    .mount('#app')
