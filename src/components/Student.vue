<template>
    <HeaderComp></HeaderComp>
    <div ref="main">

    </div>
    <div class="student-container">
        <div class="left">
            <h1>Welcome to student portal...</h1>
            <img src="../assets/login.jpg" alt="">
        </div>
        <div class="right">
            <Login :signin="signin" />
            <div class="links">
                <!-- <router-link to="/studentsignup">New Student</router-link> -->
                <router-link to="/studentsignup">Forgot Password?</router-link>
            </div>
            <p class="error" v-if="error != ''">{{ error }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderComp from './Header.vue';
import Login from './Login.vue';
import { useHead } from '@vueuse/head';

export default {
    name: 'StudentComp',
    components: {
        HeaderComp,
        Login
    },
    mounted() {
        this.scrollToTop()
    },
    data() {
        return {
            error: ''
        }
    },
    methods: {
        async signin(username, password) {
            console.warn(username, password);

            const req = { "username": username, "password": password };

            const result = await axios.post("http://localhost:8080/login", req);

            console.warn(result.data)

            if (result.data.code == 200) {
                localStorage.setItem("user", JSON.stringify(result.data.data))
                this.$router.push({ name: "StudentProfile" })
            } else {
                this.error = result.data.message
                setTimeout(() => { this.error = '' }, 5000)
            }
        },
        scrollToTop() {
            this.$refs.main.scrollIntoView({ behavior: 'smooth' });
        }
    },
    setup() {
        useHead({
            //Can be static or computed
            title: `Student Portal | Divine English Academy Radhakishanpura`,
            meta: [
                {
                    name: `description`,
                    content: 'Welcome to Divine English Academy\'s Student Portal - Connect, Track, and Succeed Our student portal at Divine English Academy provides a comprehensive and user-friendly platform for students and parents. Login to access detailed progress reports, academic resources, and stay connected with teachers anytime. Empowering students to achieve their best and keeping parents informed every step of the way.',

                },

            ]
        })
    }
}

</script>

<style scoped>
.error {
    color: red;
}

h1 {
    color: #3F51B5;
    ;
}

@media(min-width: 1200px) {
    .student-container {
        display: inline-flex;
        padding-top: 80px;
        padding-right: 40px;
        padding-left: 40px;
        padding-bottom: 10px;
    }

    .left img {
        margin-top: 30px;
        width: 70%;
        padding: 20px;
    }

    .left {
        width: 70%;
        padding: 20px;
    }

    .right {
        margin-top: 50px;
        width: 30%;
        padding: 20px;
        align-content: center;
        border: 1px solid skyblue;
        border-radius: 10px;
    }

    .links {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        padding: 30px;
    }
}

@media(max-width: 1200px) {
    .student-container {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        margin-top: 20px;
        margin-bottom: 120px;
    }

    .left img {
        display: none;
    }

    .left {
        width: 100%;
    }

    .right {
        margin-top: 50px;
        width: 100%;
        padding: 20px;
        align-content: center;
        border: 1px solid skyblue;
        border-radius: 10px;
    }

    .links {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        padding: 30px;
    }
}
</style>