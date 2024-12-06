<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                <!--h2 class="title">Divine English Academy Radhakishanpura...</h2-->
                <img src="@/assets/banner/banner.png" alt="">
            </div>
            <div class="search-bar">
                <input type="text" class="search" ref="sRef" @keyup.enter="searchFun()" @keyup="searchFun()"
                    @keydown="changeRadius()" @blur="closeSuggestion()" v-model="searchKey">

                <div class="search-suggestion" v-if="searchVisible" @click="searchVisible = false">
                    <div v-for="item in searchResult" :key="item">
                        <a @click="searchKey = item">{{ item }}</a>
                    </div>

                </div>
            </div>

            <div class="menu">
                <a href="" @click="logout()">Logout</a>
            </div>
        </div>
        <div class="nav">
            <div class="sidebar">
                <p @click="tab = 'Dashboard'"><i class="fa fa-fw fa-dashboard"></i> Dashboard</p>
                <p @click="tab = 'AdminHome'"><i class="fa fa-fw fa-edit"></i> Front Panel</p>
                <p @click="tab = 'AdminUm'"><i class="fa fa-fw fa-user"></i> UM</p>
                <p @click="tab = 'RecycleBin'"><i class="fa fa-fw fa-recycle"></i> BIN</p>
            </div>
            <div class="view">
                <Component :is="tab"></Component>
            </div>
        </div>
    </div>
</template>

<script>
import { logout } from '@/services/UmService';
import AdminHome from './AdminHome.vue';
import AdminCareers from './AdminCareers.vue';
import AdminDevelopers from './AdminDevelopers.vue';
import AdminUm from './AdminUm.vue';
import RecycleBin from './RecycleBin.vue';
import Dashboard from './Dashboard.vue';

export default {
    name: 'TaskBoard',
    components: {
        AdminHome, AdminCareers, AdminDevelopers, AdminUm, RecycleBin, Dashboard
    },
    data() {
        return {
            searchKey: '',
            searchObj: [
                'ram singh',
                'rajan',
                'karna',
            ],
            searchResult: [],
            searchVisible: false,
            tab: 'Dashboard'
        }
    },
    created() {
        if (localStorage.getItem('user') == null) {
            //this.$router.push({ name: 'Admin' })
        }
    },
    methods: {
        logout() {
            console.warn('Logout successfully')
            logout().then(res => {
                console.warn('Logout successfully' + res)
            })
        },
        changeRadius() {
            this.$refs.sRef.classList.add
        },
        searchFun() {
            this.searchResult = []
            this.searchVisible = false
            for (let index = 0; index < this.searchObj.length; index++) {
                const element = this.searchObj[index];
                console.warn(this.searchObj.length)
                if (element.startsWith(this.searchKey)) {
                    this.searchResult.push(element)
                }
                console.warn(this.searchResult.values())
            }
            console.warn(this.searchResult.length > 0)
            if (this.searchResult.length >= 0) {
                this.openSuggestion()
            } else {
                this.searchVisible = false
            }
        },
        closeSuggestion() {
            this.$refs.sRef.classList.remove('search-with-suggestion')
            this.searchVisible = false
        },
        openSuggestion() {
            this.searchVisible = true
            this.$refs.sRef.classList.add('search-with-suggestion')
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #27739c;
}

.search-bar {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search {
    width: 100%;
    height: 30px;
    padding: 10px;
    font-size: larger;
    border-radius: 40px;
    border: 1px solid #27739c;
    outline-color: white;
}

.search-with-suggestion {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.search-suggestion {
    position: absolute;
    width: 59.6%;
    padding: 10px;
    top: 70px;
    z-index: 10;
    display: list-item !important;
    background: white;
    outline: white;
    border: 2px solid #27739c;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: none;
    list-style-type: none;
}

.search-suggestion li {
    list-style-type: none;
    text-align: start;
}

.menu a {
    margin-right: 10px;
    font-size: large;
    text-decoration: none;
    color: white;
    font-weight: bold;

}

.menu a:hover {
    color: black;
    font-weight: bold;
}

.logo img {
    width: 60PX;
    border-radius: 100px;
    padding: 10px;
}

.sidebar {
    height: 100%;
    width: max-content;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #27739c;
    overflow-x: hidden;
    padding-top: 16px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

/* Style sidebar links */
.sidebar p {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    margin-top: 0;
    margin-bottom: 0;
}

/* Style links on mouse-over */
.sidebar p:hover {
    color: #f1f1f1;
}

/* Style the main content */
.main {
    margin-left: 160px;
    /* Same as the width of the sidenav */
    padding: 0px 10px;
}

/* Add media queries for small screens (when the height of the screen is less than 450px, add a smaller padding and font-size) */
@media screen and (max-height: 450px) {
    .sidebar {
        padding-top: 15px;
    }

    .sidebar a {
        font-size: 18px;
    }
}

.nav {
    display: flex;
    justify-content: flex-end;
}

.view {
    position: fixed;
    width: 88%;
    z-index: 0;
}
</style>