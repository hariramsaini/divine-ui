<template>
    <div class="userComp">
        <div class="head-btn">
            <button style="margin: 10px;" v-if="!showUpdate" @click="getComponent('addUser', '')">Add New User</button>
        </div>
        <div class="users-main" v-if="!showUpdate" v-on:click="getAdmissionApps" v-on:wheel="getAdmissionApps"
            v-on:touchend="getAdmissionApps">
            <table>
                <tr class="tableH">
                    <th>User Id</th>
                    <th>Username</th>
                    <th>Contact No</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                <tr class="tableB" v-for="item in users" :key="item">
                    <td>{{ item.userId }}</td>
                    <td>{{ item.userName }}</td>
                    <td>{{ item.mobile }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.userStatus }}</td>
                    <select name="role" id="role" v-model="item.role" disabled>
                        <option v-for="item2 in obj.roles" :key="item2" :value="item2.key">{{ item2.value }}</option>
                    </select>
                    <td>
                        <div style="display: flex;">
                            <button @click="getComponent('userUpdate', item)">Update</button>
                            <button class="delete" @click="deleteUser(item.userId)">Delete</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <component :is="tag" v-if="showUpdate" :user="user" :closeWindow="closeComponent" :obj="obj"></component>
    </div>
</template>

<script>
import { deleteUserById, getAllActiveRoles, getAllUsers, getDesignations } from '@/services/UmService';
import { defineAsyncComponent } from 'vue';
import UserUpdate from './UserUpdate.vue';
import { getLookupByTypeName } from '@/services/LookupService';
export default {
    name: 'UsersComp',
    components: {
        UserUpdate
    },
    data() {
        return {
            users: [],
            tag: '',
            user: Object,
            showUpdate: false,
            obj: {
                roles: [],
                designations: [],
                status: [],
                city: [],
                country: [],
                states: [],
                salutations: [],
                genders: [],
                userStatus:[]
            }
        }
    },
    created() {
        let count = 0
        if (count == 0) {
            this.getAllUsers();
            this.getRoles();
            count++;
        }
    },
    methods: {
        getAllUsers() {
            getAllUsers().then(res => {
                const data = res.data
                if (res.status == 200 && data.code == 200) {
                    //console.warn(JSON.stringify(data))
                    this.users = data.data
                    this.getAllLookups();
                } else {
                    console.warn(JSON.stringify(data.message))
                }

            }).catch(e => {
                console.warn(JSON.stringify(e))
            })
        },

        getRoles() {
            getAllActiveRoles().then(res => {
                if (res.status == 200) {
                    this.obj.roles = res.data
                } else {
                    console.warn(JSON.stringify(res.message))
                }
            }).catch(e => {
                console.warn(JSON.stringify(e))
            })
        },

        getComponent(param, user) {
            this.tag = ''
            if (param == 'userUpdate') {
                this.showUpdate = !this.showUpdate
                console.warn(param)
                this.tag = defineAsyncComponent(() => import('./UserUpdate.vue'));
                this.user = user
                console.warn(this.tag)
                console.warn(user)
            }
            if (param == 'addUser') {
                this.showUpdate = !this.showUpdate
                console.warn(param)
                this.tag = defineAsyncComponent(() => import('./UserCreate.vue'));
                console.warn(this.tag)
            }
        },

        closeComponent(param) {
            if (param != '' || param != null) {
                this.getAllUsers()
            }
            this.showUpdate = !this.showUpdate
        },

        getAllLookups() {
            getDesignations().then(res => {
                if (res.status == 200) {
                    this.obj.designations = res.data
                }
            }).catch(error => {
                console.error(error);
            })
            getLookupByTypeName({ "typeName": "STATUS" }).then(res => {
                this.obj.status = res;
            }).catch(error => {
                console.error(error);
            })
            getLookupByTypeName({ "typeName": "STATES" }).then(res => {
                this.obj.states = res;
            }).catch(error => {
                console.error(error);
            })
            getLookupByTypeName({ "typeName": "CITY" }).then(res => {
                this.obj.city = res;
            }).catch(error => {
                console.error(error);
            })
            getLookupByTypeName({ "typeName": "COUNTRY" }).then(res => {
                this.obj.country = res;
            }).catch(error => {
                console.error(error);
            })
            getLookupByTypeName({ "typeName": "GENDER" }).then(res => {
                this.obj.genders = res;
            }).catch(error => {
                console.error(error);
            })
            getLookupByTypeName({ "typeName": "status" }).then(res => {
                this.obj.userStatus = res;
            }).catch(error => {
                console.error(error);
            })
            getLookupByTypeName({ "typeName": "SALUTATION" }).then(res => {
                this.obj.salutations = res;
            }).catch(error => {
                console.error(error);
            })
        },

        deleteUser(userId) {
            if (confirm('Are you sure to delete this user?')) {
                const req = {
                    "userId": userId
                }

                deleteUserById(req).then(res => {
                    if (res.status == 200) {
                        console.warn(res.data)
                        this.getAllUsers();
                    } else {
                        console.warn(res.data)
                    }
                }).catch(e => {
                    console.warn(e)
                })
            }
        }
    }
}
</script>


<style scoped>
.head-btn {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.userComp {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.users-main {
    width: 100%;
    background-color: lightcyan;
    max-height: calc(100vh - 300px);
    overflow-y: auto;
}

table {
    width: 100%;
    border: 1px solid darkblue;
}

.tableH {
    background: darkcyan;
}

.tableH th {
    padding: 5px;
    font-size: larger;
}

.tableB {
    background: whitesmoke;
}

.tableB select {
    color: black;
    margin: 10px;
    font-size: large;
}

.tableB td {
    padding: 10px;
    font-size: large;
}

.tableB td a {
    text-decoration: none;
}

.tableB td a:hover {
    color: darkcyan;
}

.delete {
    margin-left: 5px;
    border-radius: 10px;
    border: 0px;
    background: grey;
    color: white;
    font-weight: bold;
    padding: 6px;
    cursor: pointer;
}

button {
    margin-left: 5px;
    border-radius: 10px;
    border: 0px;
    background-color: cornflowerblue;
    color: white;
    font-weight: bold;
    padding: 6px;
    cursor: pointer;
}
</style>
