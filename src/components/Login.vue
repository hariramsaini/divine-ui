<template>
    <h1>Log In</h1>
    <div class="register">
        <input type="email" placeholder="Enter Email" v-model.trim="username">
        <input type="password" placeholder="Enter Password" v-model.trim="password">
        <button v-on:click="signin(this.username, this.password)">Sign In</button>

    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    props: {
        signin: Function
    }
}
</script>

<style scoped>
h1 {
    color: #3F51B5;
}

.register input {
    width: 90%;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    margin-bottom: 30px;
    border-radius: 10px;
}

.register button {
    width: 100px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: black;
    font-size: x-large;
    cursor: pointer;
    border-radius: 10px;
}

.register button:hover{
    background-color: darkblue;
    color: white;
}
</style>