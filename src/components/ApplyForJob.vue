<template>
    <div v-if="show" class="applyJob">
        <div class="head"> <i class="fa fa-window-close" aria-hidden="true" @click="closeFun(null)"></i></div>
        <h1 style="color:darkblue">Apply For {{ job.title }}</h1>
        <label for="fName">Full Name:</label>
        <input type="text" id="fName" ref="fullName" v-model="app.fullName">
        <div class="file" style="margin-top: 10px;">
            <label for="resume">Resume:</label>
            <p v-if="resumeErr" class="err"></p>
            <p v-if="fileName != ''"> {{ fileName }}
                <i class="fa fa-window-close" aria-hidden="true" @click="clearFile()"></i>
            </p>
            <button v-else @click="openUpload()">Upload</button>
            <input type="file" accept=".pdf,.docx" name="image" id="file-field-result"
                @change="handleFileUpload(), getFileName()" style="display: none;" ref="fileUpload">
        </div>
        <label for="email">Email:</label>
        <input type="email" id="email" ref="email" v-model="app.email">
        <label for="mobile">Mobile:</label>
        <input type="email" id="mobile" ref="contactNo" v-model="app.contactNo">
        <label for="gender">Gender:</label>
        <select name="" id="gender" ref="gender" v-model="app.gender">
            <option value="" disabled selected hidden>Select gender</option>
            <option v-for="item in gender" :key="item" :value="item.value">
                {{ item.value }}
            </option>
        </select>
        <label for="yoe">Year of Experince:</label>
        <select name="" id="yoe" ref="totalExperience" v-model="app.totalExperience">
            <option value="" disabled selected hidden>Select Years</option>
            <option v-for="item in years" :key="item" :value="item">
                {{ item }}
            </option>
        </select>
        <label for="address">Address:</label>
        <input type="text" id="address" ref="address" v-model="app.address">

        <div v-if="displayError" class="errDiv">
            <p class="err" ref="errorP"> {{ error }} </p>
        </div>
        <div><button ref="submitBtn" @click="applyForJob()">Apply</button></div>

    </div>
    <div v-else class="cu-main">
        <h1>Thank you, we will get back to you soon..</h1>
    </div>
</template>

<script>
import { createJobApplication } from '@/services/DivineService';
import { getLookupByTypeName } from '@/services/LookupService';

export default {
    name: 'ApplyForJob',
    props: {
        closeFun: Function,
        job: Object
    },
    data() {
        return {
            gender: [],
            years: ['Fresher', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            fileName: '',
            show: true,
            error: '',
            displayError: true,
            resumeErr: false,
            app: {
                "jobApplicationId": null,
                "jobListingId": this.job.jobListingId,
                "fullName": '',
                "email": '',
                "contactNo": '',
                "totalExperience": '',
                "gender": '',
                "address": '',
                "file": {
                    fileName: '',
                    fileFormat: '',
                    data: ''
                }
            },
        }
    },
    mounted() {
        getLookupByTypeName({ "typeName": "GENDER" }).then(res => {
            this.gender = res;
        }).catch(error => {
            console.error(error);
        })
    },

    methods: {
        openUpload() {
            const doc = document.getElementById('file-field-result')
            doc.value = ''
            doc.click()
        },

        async handleFileUpload() {

            console.warn('this file hanvld')

            const fileInput = document.getElementById('file-field-result').files[0]
            function getBase64(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            }

            getBase64(fileInput).then(data => {

                const str = JSON.stringify(data);
                //console.warn(str)
                const subStr = str.substring((str.lastIndexOf(',') + 1), (str.length - 1))
                //console.warn(subStr)
                this.app.file.data = subStr
            })


            const fileFullName = fileInput.name
            this.app.file.fileName = fileFullName.substring(0, fileFullName.lastIndexOf('.'))
            this.app.file.fileFormat = fileFullName.substring(fileFullName.lastIndexOf('.') + 1, fileFullName.length)



        },

        getFileName() {
            this.fileName = this.$refs.fileUpload.files[0].name
            this.resumeErr = false
        },

        clearFile() {
            this.$refs.fileUpload.value = ''
            this.fileName = ''
        },

        applyForJob() {
            if (this.validateFields()) {
                createJobApplication(this.app).then(res => {
                    console.warn(res)
                    if (res.code == 200) {
                        this.closeFun(200)
                    } else if (res.code == 460) {
                        console.warn(res.message)
                        this.error = 'You have already applied for this possition.'
                        this.displayError = true
                    }
                    else {
                        console.error(res.message)
                        this.error = res.message
                        this.displayError = true
                    }
                }).catch(e => {
                    console.error(e)
                })
            }
            setTimeout(() => {
                this.error = ''
            }, 10000)
        },

        validateFields() {
            this.error = ''
            let error = false;
            for (let item in this.app) {
                const element = this.app[item]

                if ((element == '') && item == 'fullName') {
                    error = true
                    this.$refs.fullName.style.border = '2px solid red'
                }

                if (this.$refs.fileUpload.value == null || this.$refs.fileUpload.value == '') {
                    error = true
                    this.error = 'Resume not uploaded'
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if ((!emailRegex.test(element) || element == '') && item == 'email') {
                    error = true
                    this.$refs.email.style.border = '2px solid red'
                }

                if ((element == '') && item == 'contactNo') {
                    error = true
                    this.$refs.contactNo.style.border = '2px solid red'
                }

                if ((element == '') && item == 'totalExperience') {
                    error = true
                    this.$refs.totalExperience.style.border = '2px solid red'
                }

                if ((element == '') && item == 'gender') {
                    error = true
                    this.$refs.gender.style.border = '2px solid red'
                }

                if ((element == '') && item == 'address') {
                    error = true
                    this.$refs.address.style.border = '2px solid red'
                }
            }

            if (error == true) {
                if (this.error == '') {
                    this.error = 'Above field(s) data invalid'
                }
                return false
            } else {
                return true;
            }
        }
    },

    watch: {
        'app.fullName': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.details.studentName = previousVal
            }

            const nameRegex = /^[ a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
            if (!nameRegex.test(currentVal) && this.app.fullName.length > 1) {
                this.app.fullName = previousVal
            }

            this.$refs.fullName.style.border = ''
        },

        'app.email': function (currentVal, previousVal) {
            if (String(currentVal).length > 50) {
                this.app.email = previousVal
            }
            this.$refs.email.style.border = ''
        },

        'app.contactNo': function (currentVal, previousVal) {
            if (String(currentVal).length > 10) {
                this.app.contactNo = previousVal
            }
            this.$refs.contactNo.style.border = ''
        },

        'app.gender': function (currentVal, previousVal) {
            if (currentVal != previousVal) {
                this.$refs.gender.style.border = ''
            }

        },

        'app.totalExperience': function (currentVal, previousVal) {
            if (currentVal != previousVal) {
                this.$refs.totalExperience.style.border = ''
            }

        },

        'app.address': function (currentVal, previousVal) {
            if (String(currentVal).length > 100) {
                this.app.address = previousVal
            }
            this.$refs.address.style.border = ''
        },
    },
}


</script>

<style scoped>
.applyJob {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    border: 1px solid lightgrey;
    border-radius: 20px;
    padding: 5px;
}

label {
    margin-top: 10px;
    font-weight: bold;
}

input {
    border-radius: 20px;
    height: 20px;
    font-size: larger;
    padding: 10px;
    border: 1px solid cadetblue;
}

select {
    border-radius: 20px;
    /* height: 20px; */
    font-size: larger;
    padding: 10px;
    border: 2px solid 2px solid cadetblue;
}

button {
    width: 90px;
    margin-top: 0px;
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
    cursor: pointer;
}

.head {
    display: flex;
    flex-direction: row-reverse;
}

.head i {
    color: orangered;
    font-size: 24px;
}

.file i {
    color: lightcoral;
}

.file button {
    margin-top: 10px;
    height: 30px;
    padding: 5px;
    border: none;
    background-color: lightcoral;
    font-size: large;
    font-weight: bold;
    color: white;
    border-radius: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
}

.err {
    color: red;
    font-size: larger;
}

.errDiv {
    display: flex;
}
</style>