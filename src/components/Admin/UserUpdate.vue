<template>
    <div class="userCreate">
        <div class="head"> <i class="fa fa-window-close" aria-hidden="true" @click="closeWindow()"></i></div>
        <div class="userCreate-level-1">
            <h1>Update User</h1>
            <div class="userForm" ref="userForm">
                <div class="left">
                    <label for="userName">Username:</label>
                    <input type="text" v-model="userVo.userName" disabled>

                    <label for="password">Password:</label>
                    <div class="password">
                        <input type="password" id="password" v-model="userVo.userPassword">
                        <i class="fa fa-eye-slash" aria-hidden="true" v-if="!showPassword"
                            @click="displayPassword('show')"></i>
                        <i class="fa fa-eye" aria-hidden="true" v-else @click="displayPassword('')"></i>
                    </div>
                    <label for="fullName">Fullname:</label>
                    <div class="fullName">
                        <select name="salutation" id="salutation" v-model="userVo.salutation">
                            <option v-for="item2 in obj.salutations" :key="item2" :value="item2.key">{{ item2.value }}
                            </option>
                        </select>
                        <input type="text" v-model="userVo.fullName" disabled>
                    </div>
                    <label for="firstName">First Name:</label>
                    <input type="text" v-model="userVo.firstName" @keyup="updateFullName()">
                    <label for="middleName">Middle Name:</label>
                    <input type="text" v-model="userVo.middleName" @keyup="updateFullName()">
                    <label for="lastName">Last Name:</label>
                    <input type="text" v-model="userVo.lastName" @keyup="updateFullName()">

                    <label for="dateOfBirth">Date of Birth:</label>
                    <datePicker class="datePicker" v-model="userVo.dateOfBirth" :format="'dd-MM-yyyy'"
                        :max-date="maxDate" />

                    <label for="gender">Gender:</label>
                    <select name="gender" id="gender" v-model="userVo.sex">
                        <option v-for="item2 in obj.genders" :key="item2" :value="item2.value">{{ item2.value }}
                        </option>
                    </select>
                    <label for="email">Email:</label>
                    <input type="email" v-model="userVo.email">


                </div>


                <div class="right">

                    <label for="mobile">Phone:</label>
                    <input type="number" ref="mobile" v-model="userVo.mobile">
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
                        <option v-for="item2 in obj.userStatus" :key="item2" :value="item2.value">{{ item2.value }}
                        </option>
                    </select>
                    <label for="employeeId">Employee Id:</label>
                    <input type="number" v-model="userVo.employeeId">
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
                    <p v-if="error != ''" style="color: red; font-size: larger;">{{ error }}</p>
                    <div><button @click="addUser()">Update</button></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dataTtype from '@/data-types';
import { getLookupByValueMap } from '@/services/LookupService';
import { addOrUpdateUser, getAllActiveRoles } from '@/services/UmService';
import moment from 'moment';
import datePicker from 'vuejs3-datepicker';

export default {
    name: 'UserUpdate',
    components: {
        datePicker,
    },
    props: {
        user: Object,
        closeWindow: Function,
        obj: Object
    },
    data() {
        return {
            userVo: {
                userId: '',
                salutation: '',
                userName: '',
                userPassword: '',
                fullName: '',
                firstName: '',
                middleName: '',
                lastName: '',
                dateOfBirth: '',
                sex: '',
                email: '',
                mobile: '',
                employeeId: '',
                role: '',
                designation: '',
                userStatus: '',
                country: '',
                state: '',
                city: '',
            },
            city: [],
            showPassword: false,
            maxDate: new Date('2023-12-31'),
            error: ''
        }
    },
    created() {
        this.getRoles();
    },
    mounted() {
        this.setHeight('userForm')
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
        this.userVo.salutation = this.user.salutation
        this.userVo.firstName = this.user.firstName
        this.userVo.middleName = this.user.middleName
        this.userVo.lastName = this.user.lastName
        this.userVo.dateOfBirth = new Date(this.user.dateOfBirth)
        this.userVo.sex = this.user.sex
        this.userVo.email = this.user.email
        this.userVo.mobile = this.user.mobile
        this.userVo.employeeId = this.user.employeeId
        this.userVo.userStatus = this.user.userStatus

        this.loadCities();
    },
    methods: {
        addUser() {
            const date = new Date(this.userVo.dateOfBirth)
            this.userVo.dateOfBirth = moment(date).format('DD-MM-yyyy');

            addOrUpdateUser(this.userVo).then(res => {
                const data = res.data;
                if (res.status == 200 && data.code == 201) {
                    this.closeWindow('addUser')
                } else {
                    console.error("this.error " + data.message)
                    this.error = data.message

                    setTimeout((() => {
                        this.error = ''
                    }), 5000)
                }
            }).catch(e => {
                console.error(e)
            })
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
            const lkpParent = this.user.state
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
        },

        updateFullName() {
            if (this.userVo.middleName == '') {
                this.userVo.fullName = this.userVo.firstName + ' ' + this.userVo.lastName
            } else {
                this.userVo.fullName = this.userVo.firstName + ' ' + this.userVo.middleName + ' ' + this.userVo.lastName
            }
        },

        setHeight(param) {
            const height = dataTtype.screen.height;
            if (height <= 667) {
                this.$refs[param].style.maxHeight = '370px'
            }
            if (height > 667 && height <= 750) {
                this.$refs[param].style.height = '420px'
            }
            if (height > 750 && height <= 873) {
                this.$refs[param].style.height = '430px'
            }
            if (height > 873 && height <= 900) {
                this.$refs[param].style.height = '510px'
            }
            if (height > 900 && height <= 950) {
                this.$refs[param].style.height = '590px'
            }
        }
    },

    watch: {
        'userVo.mobile': function (currentVal, previousVal) {
            if (String(currentVal).length > 10) {
                this.userVo.mobile = previousVal
            }
            this.$refs.mobile.style.border = ''
        },
    }
}
</script>

<style scoped>
@media(min-width: 1200px) {
    .userCreate {
        border: 1px solid cadetblue;
        border-radius: 10px;
        padding: 5px;
        width: 80%;
    }

    .userCreate-level-1 {
        width: 100%;
    }

    .userForm {
        display: flex;
        max-height: 500px;
        overflow-x: auto;
        padding: 20px;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .password input {
        width: 90%;
    }

    .fullName input {
        margin-left: 10px;
        /* width: 86%; */
    }
}

@media(max-width: 1200px) {
    .userCreate {
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

    .fullName input {
        margin-left: 10px;
        width: 76%;
    }
}

h1 {
    color: darkblue;
}

input {
    border: 1px solid cadetblue;
    border-radius: 10px;
    font-size: large;
    padding: 3px;
    margin-bottom: 10px;
}

/* .datePicker {
    border: 1px solid cadetblue;
    border-radius: 10px;
    font-size: large;
    padding: 3px;
    margin-bottom: 10px;
} */



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

.left {
    display: flex;
    flex-direction: column;
}

.right {
    display: flex;
    flex-direction: column;
}
</style>

<style>
.vuejs3-datepicker__value {
    border: 1px solid cadetblue;
    border-radius: 10px;
    font-size: large;
    padding: 3px;
    margin-bottom: 10px;
    display: flex;
}
</style>