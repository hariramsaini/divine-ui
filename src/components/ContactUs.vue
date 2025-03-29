<template>
    <div v-if="show" class="cu-main">
        <h1>{{ title }}</h1>
        <input type="text" placeholder="Enter Student Name" ref="sName" v-model="details.studentName">
        <input type="text" placeholder="Father's Name" ref="fName" v-model="details.fatherName">
        <select name="class" id="class" ref="class" v-model="details.studentClass">
            <option value="" disabled selected hidden>Select Class</option>
            <option v-for="item in classArray" :key="item" :value="item.key">
                {{ item.value }}
            </option>
        </select>
        <input type="number" placeholder="Enter Contact Number" ref="mobile" v-model="details.contactNumber">
        <input type="email" placeholder="Enter Email" ref="email" v-model="details.email">
        <input type="text" placeholder="Enter Address" ref="address" v-model="details.address">
        <button v-on:click="submitEnquiry()">Submit</button>
    </div>
    <div v-else class="cu-main">
        <h1>Thank you, we will get back to you soon..</h1>
    </div>
    <div v-if="displayError" class="errDiv">
        <p class="err"> Above field(s) data invalid </p>
    </div>
</template>

<script>
import { createAdmissionEnquiry } from '@/services/DivineService';
import { getLookupByTypeName } from '@/services/LookupService';

export default {
    name: 'ContactUs',
    props: {
        title: String
    },
    data() {
        return {
            details: {
                studentName: '',
                fatherName: '',
                studentClass: '',
                contactNumber: '',
                email: '',
                address: ''
            },
            classArray: [],
            show: true,
            error: [],
            displayError: false
        }
    },
    methods: {
        submitEnquiry() {
            this.$refs.sName.focus()
            this.error = []

            if (this.error.length == 0) {
                for (let item in this.details) {
                    const element = this.details[item]

                    if ((element == '') && item == 'studentName') {
                        this.error.push(item)
                        this.$refs.sName.style.border = '2px solid red'
                    }
                    if ((element == '') && item == 'fatherName') {
                        this.error.push(item)
                        this.$refs.fName.style.border = '2px solid red'
                    }

                    if ((element == '') && item == 'studentClass') {
                        this.error.push(item)
                        this.$refs.class.style.border = '2px solid red'
                    }

                    if ((element == '') && item == 'contactNumber') {
                        this.error.push(item)
                        this.$refs.mobile.style.border = '2px solid red'
                    }

                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if ((!emailRegex.test(element) || element == '') && item == 'email') {
                        this.error.push(item)
                        this.$refs.email.style.border = '2px solid red'
                    }

                    if ((element == '') && item == 'address') {
                        this.error.push(item)
                        this.$refs.address.style.border = '2px solid red'
                    }
                }
            }



            if (this.error.length == 0) {
                createAdmissionEnquiry(this.details).then(res => {
                    console.warn("response>>>" + JSON.stringify(res))
                    if (res.code == 200) {
                        this.show = false
                        this.displayError = false;
                    } else {
                        this.error.push(res.message)
                    }
                }).catch(error => {
                    console.error(error);
                })
            } else {
                this.displayError = true
                setTimeout(() => {
                    this.displayError = false;
                }, 10000);
            }
        },
    },

    watch: {
        'details.studentName': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.details.studentName = previousVal
            }

            const nameRegex = /^[ a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
            if (!nameRegex.test(currentVal) && this.details.studentName.length > 1) {
                this.details.studentName = previousVal
            }

            this.$refs.sName.style.border = ''
        },
        'details.fatherName': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.details.fatherName = previousVal
            }

            const nameRegex = /^[ a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
            if (!nameRegex.test(currentVal) && this.details.fatherName.length > 1) {
                this.details.fatherName = previousVal
            }

            this.$refs.fName.style.border = ''
        },

        'details.studentClass': function () {
            this.$refs.class.style.border = ''
        },

        'details.email': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.details.email = previousVal
            }
            this.$refs.email.style.border = ''
        },

        'details.contactNumber': function (currentVal, previousVal) {
            if (String(currentVal).length > 10) {
                this.details.contactNumber = previousVal
            }
            this.$refs.mobile.style.border = ''
        },

        'details.address': function (currentVal, previousVal) {
            if (String(currentVal).length > 100) {
                this.details.address = previousVal
            }
            this.$refs.address.style.border = ''
        },
    },

    created() {
        const req = {
            "typeName": "CLASS"
        }
        getLookupByTypeName(req).then(res => {
            this.classArray = res;
        }).catch(error => {
            console.error(error);
        })

    }
}
</script>

<style scoped>
.cu-main {
    border: 1px solid skyblue;
    height: fit-content;
    border-radius: 10px;
}

.cu-main h1 {
    color: #3F51B5;
}

.cu-main input {
    width: 90%;
    height: 35px;
    border-radius: 10px;
    border: 1px solid skyblue;
    padding: 5px;
    font-size: x-large;
    margin: 10px;
}

.cu-main button {
    width: 100px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: black;
    font-size: x-large;
    cursor: pointer;
    border-radius: 10px;
    margin: 10px;
}

.cu-main button:hover {
    background-color: darkblue;
    color: white;
}

.cu-main select {
    width: 92%;
    height: 45px;
    border-radius: 10px;
    border: 1px solid skyblue;
    padding: 5px;
    font-size: x-large;
    margin: 10px;
}

.err {
    color: red;
    font-size: larger;
}

.errDiv {
    display: flex;
}
</style>