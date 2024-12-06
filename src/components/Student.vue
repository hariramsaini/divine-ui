<template>
    <HeaderComp></HeaderComp>
    <div class="student-container">
        <div class="left">
            <h1>Welcome to student portal...</h1>
            <img src="../assets/login.jpg" alt="">
        </div>
        <div class="right">
            <Login :signin="signin" />
            <div class="links">
                <router-link to="/studentsignup">New Student</router-link>
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

export default {
    name: 'StudentComp',
    components: {
        HeaderComp,
        Login
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
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}

h1{
    color: darkblue;
}

@media(min-width: 1200px) {
    .student-container {
        display: inline-flex;
        padding-top: 80px;
        padding-right: 10px;
        padding-left: 10px;
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
        flex-direction: column;
        align-items: center;
        padding: 20px;
        margin-top: 80px;
        margin-bottom: 50px;
    }

    .left img {
        margin-top: 30px;
        width: 100%;
        padding: 20px;
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