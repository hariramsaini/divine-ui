<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                <!--h2 class="title">Divine English Academy Radhakishanpura...</h2-->
                <router-link to="/" class="link"><img src="@/assets/banner/logo.png" alt=""></router-link>
            </div>

            <div class="text" w>
                <h1>Divine English Academy...</h1>
            </div>
            <div class="nav-menu-bar">
                <i class="fa fa-bars" aria-hidden="true" @click="mobileMenu = !mobileMenu"></i>
            </div>
            <div class="menu" style="width: 50%;">
                <router-link to="/" class="link"><i class="fa fa-fw fa-home"></i>Home</router-link>
                <router-link to="/bootcamp" class="link"><i class="fa fa-laptop"
                        aria-hidden="true"></i>BootCamp</router-link>
                <router-link to="/developers" class="link"><i class="fa fa-fw fa-users"></i>Developers</router-link>
                <!-- New Admission Dropdown -->
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle">
                        <i class="fas fa-user-plus"></i> New Admission <i class="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link to="/admission/process" class="dropdown-item"><i
                                    class="fas fa-clipboard-list"></i>
                                Admission Process</router-link></li>
                        <li><router-link to="/admission/requirement" class="dropdown-item"><i
                                    class="fas fa-file-alt"></i> Requirements</router-link></li>
                        <li><router-link to="/admission/feestructure" class="dropdown-item"><i
                                    class="fas fa-money-bill-wave"></i> Fee Structure</router-link></li>
                    </ul>
                </li>

                <!-- More Menues Dropdown -->
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle">
                        More <i class="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link to="/careers" class="dropdown-item"><i class="fas fa-graduation-cap"></i>
                                Careers</router-link></li>
                        <li><router-link to="/student" class="dropdown-item"><i
                                    class="fa fa-fw fa-user"></i>Student</router-link></li>
                    </ul>
                </li>
                <router-link to="/student" class="link"></router-link>
            </div>
        </div>
        <div class="nav" v-show="mobileMenu">
            <div class="sidebar">
                <div class="close-button"><i class="fa fa-window-close" aria-hidden="true"
                        @click="mobileMenu = !mobileMenu"></i></div>
                <router-link to="/" class="link"><i class="fa fa-fw fa-home"></i>Home</router-link>
                <router-link to="/bootcamp" class="link"><i class="fa fa-laptop"
                        aria-hidden="true"></i>BootCamp</router-link>
                <router-link to="/developers" class="link"><i class="fa fa-fw fa-users"></i>Developers</router-link>

                <!-- New Admission Dropdown -->
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle">
                        <i class="fas fa-user-plus"></i> New Admission <i class="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link to="/admission/process" class="dropdown-item"><i
                                    class="fas fa-clipboard-list"></i>
                                Admission Process</router-link></li>
                        <li><router-link to="/admission/requirement" class="dropdown-item"><i
                                    class="fas fa-file-alt"></i> Requirements</router-link></li>
                        <li><router-link to="/admission/feestructure" class="dropdown-item"><i
                                    class="fas fa-money-bill-wave"></i> Fee Structure</router-link></li>
                    </ul>
                </li>
                <router-link to="/careers"><i class="fa fa-graduation-cap" aria-hidden="true"></i>Careers</router-link>
                <router-link to="/student" class="link"><i class="fa fa-fw fa-user"></i>Student</router-link>
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
    animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.menu a {
    font-size: larger;
    margin-left: 20px;
    color: white;
    text-decoration: none;
}

.menu a:hover {
    color: darkslateblue;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    padding: 10px;

    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.nav-item {
    /* margin-left: 1.2rem; */
    position: relative;
    display: flex;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
}

.nav-link i {
    margin-right: 1px;
    font-size: 0.9rem;
}

.dropdown-icon {
    margin-left: 5px;
    font-size: 0.7rem;
    transition: transform 0.3s ease;
}

/* Dropdown Menu Styles */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: #27739c;
    min-width: 220px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 0.5rem 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
    z-index: 100;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-item {
    color: #333;
    padding: 0.6rem 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease;
}

.dropdown-item:hover {
    background-color: #f5f5f5;
    color: #1a2a6c;
    padding-left: 1.2rem;
}

.dropdown-item i {
    margin-right: 10px;
    color: #FF6000;
    width: 18px;
    text-align: center;
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

    .header {
        height: 80px;
    }

    .nav-menu-bar i {
        color: white;
        font-size: 34px;
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        transition: 10s ease;
    }

    .close-button {
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
    }

    .close-button i {
        color: white;
        font-size: 24px
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 500;
        text-align: left;
    }

    .nav a {
        font-size: x-large;
        margin-right: 20px;
        color: white;
        text-decoration: none;
        padding: 20px;
        padding-left: 0;
    }

    .nav a:hover {
        color: darkslateblue;
    }

    .text h1 {
        color: yellow;
    }
}

@media(min-width: 1200px) {
    .menu {
        display: flex;
        align-items: center;
    }

    .nav-menu-bar {
        display: none;
    }

    .nav {
        display: none;
    }

    .header {
        height: 50px;
    }

    .text h1 {
        color: yellow;
        /* font-size: xxx-large; */
    }

    li {
        text-align: left;
    }
}

.title {
    color: darkblue;
}

.title:hover {
    color: darkslateblue;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 60px;
    border-radius: 100px;
    background-color: white;
}

.bar {
    width: 40px;
    height: 2px;
    background-color: white;
    margin-bottom: 5px;
}
</style>