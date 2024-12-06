<template>
    <div v-if="show" class="cu-main">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Enter Student Name" ref="sName" v-model="details.sName">
        <input type="text" placeholder="Father's Name" ref="fName" v-model="details.name">
        <select name="class" id="class" ref="class"  style="color: gray;" v-model="details.class">
            <option value="" disabled selected hidden>Select Class</option>
            <option value="Playgroup">Play Group</option>
            <option value="Nursery">Nursery</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
        </select>
        <input type="number" maxlength="10" placeholder="Enter Contact Number" ref="mobile" v-model="details.mobile">
        <input type="email" placeholder="Enter Email" ref="email" v-model="details.email">
        <input type="text" placeholder="Enter Address" ref="address" v-model="details.address">
        <button v-on:click="sendEmail()">Submit</button>
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
export default {
    name: 'ContactUs',
    data() {
        return {
            details: {
                sName: '',
                name: '',
                email: '',
                mobile: Number,
                address: '',
                class: ''
            },
            show: true,
            error: [],
            displayError: false
        }
    },
    methods: {
        sendEmail() {
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
                        this.$refs.fName.focus()
                    }
                    const nameRegex = /^[a-zA-Z]+$/;
                    if (!nameRegex.test(element) && item == 'name') {
                        this.error.push(item)
                        this.$refs.fName.focus()
                    }
                    if (!nameRegex.test(element) && item == 'sName') {
                        this.error.push(item)
                        this.$refs.sName.focus()
                    }
                    const mobileRegex = /^[0-9]+$/;
                    if (!mobileRegex.test(element) && item == 'mobile') {
                        this.error.push(item)
                    }
                }
            }



            if (this.error.length == 0) {
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
        'details.name': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.details.name = previousVal
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

.cu-main input {
    width: 90%;
    height: 35px;
    border-radius: 10px;
    border: 1px solid blueviolet;
    padding: 5px;
    font-size: x-large;
    margin: 10px;
}

.cu-main button {
    width: 90%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid blueviolet;
    padding: 5px;
    font-size: x-large;
    margin: 20px;
    font-weight: bold;
}

.cu-main button:hover {
    background-color: blueviolet;
    color: white;
}

.cu-main select {
    width: 92%;
    height: 45px;
    border-radius: 10px;
    border: 1px solid blueviolet;
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