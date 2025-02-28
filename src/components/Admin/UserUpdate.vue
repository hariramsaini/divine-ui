<template>
    <div class="userUpdate">
        <div class="head"> <i class="fa fa-window-close" aria-hidden="true"
                @click="closeWindow('userUpdate-level-1')"></i></div>
        <div class="userUpdate-level-1">
            <h1>Update User</h1>
            <div class="userForm">
                <label for="userId">UserId:</label>
                <input type="text" v-model="userVo.userId" disabled>
                <label for="userId">Username:</label>
                <input type="text" v-model="userVo.userName" disabled>
                <label for="userId">Password:</label>
                <div class="password">
                    <input type="password" id="password" v-model="userVo.userPassword">
                    <i style="font-size: x-large;color: cadetblue;" class="fa fa-eye-slash" aria-hidden="true"
                        v-if="!showPassword" @click="displayPassword('show')"></i>
                    <i style="font-size: x-large;color: cadetblue;" class="fa fa-eye" aria-hidden="true" v-else
                        @click="displayPassword('')"></i>
                </div>
                <label for="userId">Fullname:</label>
                <input type="text" v-model="userVo.fullName">
                <label for="role">Role:</label>
                <select name="role" id="role" v-model="userVo.role">
                    <option v-for="item2 in obj.roles" :key="item2" :value="item2.key">{{ item2.value }}</option>
                </select>
                <label for="designation">Designation:</label>
                <select name="designation" id="designation" v-model="userVo.designation">
                    <option v-for="item2 in obj.designations" :key="item2" :value="item2.value">{{ item2.value }}
                    </option>
                </select>
                <label for="status">Status:</label>
                <select name="status" id="status" v-model="userVo.userStatus">
                    <option v-for="item2 in obj.status" :key="item2" :value="item2.value">{{ item2.value }}</option>
                </select>
                <label for="country">Country:</label>
                <select name="country" id="country" v-model="userVo.country">
                    <option v-for="item2 in obj.country" :key="item2" :value="item2.key">{{ item2.value }}</option>
                </select>
                <label for="state">State:</label>
                <select name="state" id="state" v-model="userVo.state" @change="loadCities()">
                    <option v-for="item2 in obj.states" :key="item2" :value="item2.value">{{ item2.value }}</option>
                </select>
                <label for="city">City:</label>
                <select name="city" id="city" v-model="userVo.city">
                    <option v-for="item2 in city" :key="item2" :value="item2.value">{{ item2.value }}</option>
                </select>
                <div><button>Update</button></div>
            </div>
        </div>
    </div>

</template>

<script>
import { getLookupByValueMap } from '@/services/LookupService';
import { getAllActiveRoles } from '@/services/UmService';

export default {
    name: 'userUpdate',
    props: {
        user: Object,
        closeWindow: Function,
        obj: Object
    },
    data() {
        return {
            userVo: {
                userId: '',
                userName: '',
                userPassword: '',
                fullName: '',
                role: '',
                designation: '',
                userStatus: '',
                country: '',
                state: '',
                city: '',
            },
            roles: [],
            designations: [],
            status: [],
            city: [],
            country: [],
            states: [],
            showPassword: false
        }
    },
    created() {
        this.getRoles();
        this.city = this.obj.city;
    },
    mounted() {
        this.userVo.userId = this.user.userId
        this.userVo.userName = this.user.userName
        this.userVo.userPassword = this.user.userPassword
        this.userVo.fullName = this.user.fullName
        this.userVo.role = this.user.role
        this.userVo.designation = this.user.designation
        this.userVo.userStatus = this.user.userStatus
        this.userVo.country = this.user.country
        this.userVo.state = this.user.state
        this.userVo.city = this.user.city


    },
    methods: {
        getAllUsers() {

        },

        getRoles() {
            getAllActiveRoles().then(res => {
                if (res.status == 200) {
                    this.roles = res.data
                } else {
                    console.warn(JSON.stringify(res.message))
                }
            }).catch(e => {
                console.warn(JSON.stringify(e))
            })
        },

        loadCities() {
            const lkpParent = document.getElementById('state').value
            console.warn('lkpPare' + lkpParent)
            const req = {
                "parentLkp": lkpParent,
                "type": "states"
            }
            getLookupByValueMap(req).then(res => {
                this.city = res
            }).catch(e => {
                console.error(e)
            })
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
@media(min-width: 1200px) {
    .userUpdate {
        border: 1px solid cadetblue;
        border-radius: 10px;
        padding: 5px;
        width: 50%;
    }

    .userUpdate-level-1 {
        width: 100%;
    }

    .userForm {
        display: flex;
        max-height: 500px;
        overflow-x: auto;
        flex-direction: column;
        padding: 20px;
    }

    .password input {
        width: 90%;
    }
}

@media(max-width: 1200px) {
    .userUpdate {
        border: 1px solid cadetblue;
        border-radius: 10px;
        padding: 5px;
        width: 95%;
    }


    .userCreate-level-1 {
        width: 100%;
    }

    .userForm {
        display: flex;
        max-height: 500px;
        overflow-x: auto;
        flex-direction: column;
        padding: 20px;
    }

    .password input {
        width: 90%;
    }
}

h1{
    color: darkblue;
}

input {
    border: 1px solid cadetblue;
    border-radius: 10px;
    font-size: large;
    padding: 3px;
    margin-bottom: 10px;
}

select {
    border: 1px solid cadetblue;
    border-radius: 10px;
    font-size: large;
    padding: 3px;
    margin-bottom: 10px;
}

button {
    margin-top: 10px;
    height: 35px;
    padding: 5px;
    border: none;
    background-color: #0984e3;
    font-size: large;
    font-weight: bold;
    color: white;
    border-radius: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    width: 100px;
}

button:hover {
    background-color: white;
    color: #0984e3;
    border: 1px solid #0984e3
}

.head {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}

.head i {
    font-size: larger;
    margin: 10px;
    color: red;
}

.password {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.password i {
    margin-left: 10px;
    font-size: larger;
    font-size: x-large;
    color: cadetblue;
}
</style>