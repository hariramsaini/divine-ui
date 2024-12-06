<template>
     <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="fullName">
        <input type="email" placeholder="Enter Email" v-model="username">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button v-on:click="signup()">Sign Up</button>
        <div class="links">
            <router-link to="/studentsignup">New Student</router-link>
            <router-link to="/studentsignup">Forgot Password?</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style scoped>
.register input {
    width: 300px;
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
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: white;
    font-size: x-large;
    cursor: pointer;
    border-radius: 10px;
}

.register .links {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
</style>