<template>
    <div class="container">
        <div>
            <div style="display: flex;">
                <button @click="selected('users'), openTag('users')" ref="users">Users</button>
                <button @click="selected('roles'), openTag('roles')" ref="roles">Roles</button>
            </div>
            <component :is="tag"></component>
        </div>
    </div>
</template>

<script>
//import { defineAsyncComponent } from 'vue';
import UsersComp from './UsersComp.vue';
export default {
    name: 'AdminUm',
    components: {
        UsersComp
    },
    data() {
        return {
            tag: 'UsersComp'
        }
    },
    mounted() {
        this.selected('users')
    },
    methods: {

        openTag(param) {
            if (param == 'users') {
                this.tag = 'UsersComp'
            }
            if (param == 'roles') {
                //this.tag = defineAsyncComponent(() => import('./JobApplications.vue'));
            }

        },
        selected(param) {
            if (param == 'users') {
                this.$refs.users.style.background = '#0984e3'
                this.$refs.users.style.color = 'white'

                this.$refs.roles.style.background = '#ddd'
                this.$refs.roles.style.color = 'black'
            }
            if (param == 'roles') {
                this.$refs.roles.style.background = '#0984e3'
                this.$refs.roles.style.color = 'white'

                this.$refs.users.style.background = '#ddd'
                this.$refs.users.style.color = 'black'
            }
        }
    }
}
</script>

<style scoped>
.dashboard-container {
    background-color: aliceblue;
    padding: 10px 20px;
    margin-top: 10px;
}

button {
    border: 0px;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 1px;
    background: blue;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
    margin-left: 10px;
    transition: 0.4s allease-out;
    width: 120px;
}
</style>