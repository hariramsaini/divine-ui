<template>
    <div class="container" @keyup.enter="loginFun()">
        <div class="header">
            <div class="logo">
                <!--h2 class="title">Divine English Academy Radhakishanpura...</h2-->
                <img src="@/assets/banner/banner.png" alt="">
            </div>
            <h1>Admin Panel</h1>
        </div>

        <div class="login">
            <h1>Login</h1>
            <input type="text" placeholder="Enter username" v-model.trim="login.userName">
            <div class="password">
                <input type="password" id="password" placeholder="Enter password" v-model.trim="login.userPassword">
                <div class="icon">
                    <i class="fa fa-eye-slash" aria-hidden="true" v-if="!showPassword"
                        @click="displayPassword('show')"></i>
                    <i class="fa fa-eye" aria-hidden="true" v-else @click="displayPassword('')"></i>
                </div>
            </div>
            <button ref="login" v-on:click="loginFun()">Login</button>
        </div>

        <p class="error">{{ error }}</p>
    </div>
</template>

<script>
import { login } from '@/services/UmService';
import { hide } from '../BigFooter.vue';

export default {
    name: "AdminPanel",
    data() {
        return {
            login: {
                userName: null,
                userPassword: null
            },
            error: '',
            showPassword: false
        }
    },
    created() {
        if (localStorage.getItem('user') != null) {
            this.$router.push({ name: 'Taskboard' })
        }
    },
    methods: {
        loginFun() {
            if (this.login.userName == null || this.login.userPassword == null) {
                this.error = 'Username or Password can\'t be null'
            } else {
                console.warn(this.login)
                login(this.login).then(res => {
                    if (res != null && res.code != 500) {
                        localStorage.setItem('user', JSON.stringify(res))
                        this.$router.push({ name: 'Taskboard' })
                        hide(false)
                    } else {
                        console.warn(res.message)
                        this.error = res.message
                    }
                });
            }

            setTimeout(() => {
                this.error = null
            }, 2000)

        },

        displayPassword(param) {
            this.showPassword = !this.showPassword
            const pass = document.getElementById('password')
            if (param == 'show') {
                pass.type = 'text'
            } else {
                pass.type = 'password'
            }
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
}

.header {
    width: 100%;
    margin-bottom: 40px;
}

.header h1 {
    color: #182b5c;
}

.logo img {
    width: 150PX;
    border-radius: 100px;
    padding: 5px;
}

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    border: 2px solid #27739c;
    border-radius: 20px;
    padding: 20px;
    background-color: #27739c;

}

.login h1 {
    color: white;
    margin-bottom: 40px;
}

.login input {
    width: 80%;
    height: 20px;
    padding: 10px;
    font-size: larger;
    border: 2px solid #27739c;
    border-radius: 20px;
    margin-bottom: 10%;
}

.login button {
    width: 80px;
    border: none;
    border-radius: 20px;
    height: 40px;
    font-size: larger;
    font-weight: bold;
    color: #182b5c;
    margin-bottom: 30px;
    cursor: pointer;
}

.login button:hover {
    background-color: lightyellow;
}

@media(max-width: 1200px) {
    .container {
        padding: 10px;
        margin-bottom: 100px;
    }

    .login {
        width: 90%;
    }

    .login {
        margin-bottom: 0;
    }

    h1 {
        margin: 0;
    }

    .header {
        margin-bottom: 5px;
    }
}

@media(min-width: 1200px) {}

.error {
    color: red;
    font-size: larger;
    font-weight: bold;
}

i {
    color: darkorange;
    font-size: x-large;
    margin-left: 5px;
}

.password {
    display: flex;
    width: 93%;
    align-items: baseline;
    justify-content: center;
}

.password input {
    width: 80%;
    height: 20px;
    padding: 10px;
    font-size: larger;
    border: 2px solid #27739c;
    border-radius: 20px;
    margin-bottom: 10%;
}

.icon {
    width: 20px;
    display: flex;
    align-items: baseline;
    justify-content: center;
}
</style>