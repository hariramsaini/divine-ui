<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                <!--h2 class="title">Divine English Academy Radhakishanpura...</h2-->
                <img src="@/assets/banner/banner.png" alt="">
            </div>
            <div class="nav-menu-bar" @click="mobileMenu = !mobileMenu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <div class="menu">
                <router-link to="/" class="link"><i class="fa fa-fw fa-home"></i>Home</router-link>
                <router-link to="/careers"><i class="fa fa-fw fa-wrench"></i>Careers</router-link>
                <router-link to="/developers" class="link"><i class="fa fa-fw fa-user"></i>Developers</router-link>
                <router-link to="/student" class="link">Student</router-link>
                <router-link to="/admin" class="link">Admin</router-link>
            </div>
        </div>
        <div class="nav" v-show="mobileMenu">
            <div class="sidebar">
                <router-link to="/" class="link"><i class="fa fa-fw fa-home"></i>Home</router-link>
                <router-link to="/careers"><i class="fa fa-fw fa-wrench"></i>Careers</router-link>
                <router-link to="/developers" class="link"><i class="fa fa-fw fa-user"></i>Developers</router-link>
                <router-link to="/student" class="link">Student</router-link>
                <router-link to="/admin" class="link">Admin</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    components: {

    },
    data() {
        return {
            mobileMenu: false
        }
    },
    methods: {
        toggleSidebar() {
            console.warn('toggleBar')
            this.$refs.navM.toggleSidebar()
        }
    },
}
</script>

<style scoped>
.container {
    overflow: auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkblue;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding: 2px;
    z-index: 100;
    background-image: url('../assets/banner/header.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.menu a {
    font-size: x-large;
    margin-right: 20px;
    color: white;
    text-decoration: none;
}

.menu a:hover {
    color: darkslateblue;
}

@media(max-width: 1200px) {
    .menu {
        display: none;
    }

    .nav-menu-bar {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        transition: 10s ease;
    }

    .sidebar {
        height: 100%;
        width: 50%;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #135179;
        overflow-x: hidden;
        padding: 16px;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 50;
    }

    a {
        font-size: x-large;
        margin-right: 20px;
        color: white;
        text-decoration: none;
        padding: 20px;
        padding-left: 0;
    }
}

@media(min-width: 1200px) {

    .nav-menu-bar {
        display: none;
    }

    .nav {
        display: none;
    }
}

.title {
    color: darkblue;
}

.title:hover {
    color: darkslateblue;
}

.logo img {
    width: 60px;
    border-radius: 100px;
}

.bar {
    width: 40px;
    height: 2px;
    background-color: white;
    margin-bottom: 5px;
}
</style>