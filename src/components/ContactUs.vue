<template>
    <div v-if="show" class="cu-main">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Enter Student Name" ref="sName" v-model="details.studentName">
        <input type="text" placeholder="Father's Name" ref="fName" v-model="details.fatherName">
        <select name="class" id="class" ref="class" style="color: gray;" v-model="details.studentClass">
            <option value="" disabled selected hidden>Select Class</option>
            <option v-for="item in classArray" :key="item" :value="item.key">
                {{ item.value }}
            </option>
        </select>
        <input type="number" maxlength="10" placeholder="Enter Contact Number" ref="mobile"
            v-model="details.contactNumber">
        <input type="email" placeholder="Enter Email" ref="email" v-model="details.email">
        <input type="text" placeholder="Enter Address" ref="address" v-model="details.address">
        <button v-on:click="submitEnquiry()">Submit</button>
    </div>
    <div v-else class="cu-main">
        <h1>Thank you, we will get back to you soon..</h1>
    </div>
    <div v-if="displayError" class="errDiv">
        <p class="err"> Following fields are invalid: </p><br>
        <p class="err" v-for="item in error" :key="item">{{ item }}, </p>
    </div>
</template>

<script>
import { createAdmissionEnquiry } from '@/services/DivineService';
import { getLookupByTypeName } from '@/services/LookupService';

export default {
    name: 'ContactUs',
    data() {
        return {
            details: {
                studentName: '',
                fatherName: '',
                studentClass: '',
                contactNumber: Number,
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
            console.warn("sendEmail", this.details)
            for (let item in this.details) {
                const element = this.details[item]
                if (element == '' || element == null) {
                    this.error.push(item)
                }
            }
            if (this.error.length == 0) {
                for (let item in this.details) {
                    const element = this.details[item]
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(element) && item == 'email') {
                        this.error.push(item)
                        this.$refs.email.focus()
                    }
                    const nameRegex = /^[a-zA-Z]+$/;
                    if (!nameRegex.test(element) && item == 'fatherName') {
                        this.error.push(item)
                        this.$refs.fName.focus()
                    }
                    if (!nameRegex.test(element) && item == 'studentName') {
                        this.error.push(item)
                        this.$refs.sName.focus()
                    }
                    const mobileRegex = /^[0-9]+$/;
                    if (!mobileRegex.test(element) && item == 'contactNumber') {
                        this.error.push(item)
                        this.$refs.mobile.focus()
                    }
                }
            }



            if (this.error.length == 0) {
                createAdmissionEnquiry(this.details).then(res => {
                    console.warn(res)
                }).catch(error => {
                    console.error(error);
                })
                this.show = false
            } else {
                this.displayError = true
                setTimeout(() => {
                    this.displayError = false;
                }, 10000);
            }
        },
    },

    watch: {
        'details.fatherName': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.details.fatherName = previousVal
            }
        },
        'details.email': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.details.email = previousVal
            }
        },
        'details.mobile': function (currentVal, previousVal) {
            if (String(currentVal).length > 10) {
                this.details.mobile = previousVal
            }
        },
        'details.address': function (currentVal, previousVal) {
            if (String(currentVal).length > 100) {
                this.details.email = previousVal
            }
        },
    },

    created() {
        const req = {
            "typeName": "CLASS"
        }
        getLookupByTypeName(req).then(res => {
            this.classArray = res;
            console.warn("Response:  " + JSON.stringify(this.classArray))
        }).catch(error => {
            console.error(error);
        })

    }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

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