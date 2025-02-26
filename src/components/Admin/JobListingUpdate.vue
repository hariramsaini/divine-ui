<template>
    <div class="job">
        <div class="head"> <i class="fa fa-window-close" aria-hidden="true" @click="closeFun"></i></div>
        <h2>Update Job Details</h2>
        <div class="form">
            <label for="title">Job Title:</label>
            <input type="text" id="title" v-model="job.title">
            <label for="employer">Employer:</label>
            <select name="employer" id="employer" ref="employer" v-model="job.company">
                <option value="" disabled selected hidden>Select Employer</option>
                <option v-for="item in company" :key="item" :value="item.value">
                    {{ item.value }}
                </option>
            </select>
            <label for="branch">Branch:</label>
            <select name="branch" id="branch" ref="branch" v-model="job.branch">
                <option value="" disabled selected hidden>Select Branch</option>
                <option v-for="item in branch" :key="item" :value="item.value">
                    {{ item.value }}
                </option>
            </select>
            <label for="jobType">Job Type:</label>
            <select name="jobType" id="jobType" ref="jobType" v-model="job.jobType">
                <option value="" disabled selected hidden>Select Job Type</option>
                <option v-for="item in jobTypes" :key="item" :value="item.value">
                    {{ item.value }}
                </option>
            </select>
            <label for="jobType">Job Status:</label>
            <select name="jobStatus" id="jobStatus" ref="jobStatus" v-model="job.status">
                <option value="" disabled selected hidden>Select Job Status</option>
                <option v-for="item in jobStatus" :key="item" :value="item.value">
                    {{ item.value }}
                </option>
            </select>
            <label for="location">Location:</label>
            <select name="location" id="location" ref="location" v-model="job.employeeLocation">
                <option value="" disabled selected hidden>Select Location</option>
                <option v-for="item in location" :key="item" :value="item.value">
                    {{ item.value }}
                </option>
            </select>
            <label for="gender">Gender:</label>
            <select name="gender" id="gender" ref="gender" v-model="job.gender">
                <option value="" disabled selected hidden>Select Gender</option>
                <option v-for="item in gender" :key="item" :value="item.value">
                    {{ item.value }}
                </option>
            </select>
            <label for="jobDesc">Job Description</label>
            <textarea name="description" id="jobDesc" rows="10" v-model="job.description"></textarea>
            <button @click="updateJobListed">Update</button>
        </div>
    </div>
</template>

<script>
import { createJobListing } from '@/services/DivineService';
import { getLookupByTypeName } from '@/services/LookupService';

export default {
    name: 'JobListingUpdate',
    props: {
        closeFun: Function,
        listedJob: Object
    },
    data() {
        return {
            jobTypes: [],
            company: [],
            branch: [],
            location: [],
            gender: [],
            jobStatus:[],
            job: {
                listingId:'',
                title: '',
                company: '',
                branch: '',
                jobType: '',
                employeeLocation: '',
                description: '',
                gender: '',
                status:''
            }
        }
    },
    created() {
        getLookupByTypeName({ "typeName": "JOB TYPE" }).then(res => {
            this.jobTypes = res;
        }).catch(error => {
            console.error(error);
        }),
            getLookupByTypeName({ "typeName": "COMPANY" }).then(res => {
                this.company = res;
            }).catch(error => {
                console.error(error);
            }),
            getLookupByTypeName({ "typeName": "BRANCH" }).then(res => {
                this.branch = res;
            }).catch(error => {
                console.error(error);
            }),
            getLookupByTypeName({ "typeName": "EMPLOYEE LOCATION" }).then(res => {
                this.location = res;
            }).catch(error => {
                console.error(error);
            }),
            getLookupByTypeName({ "typeName": "GENDER" }).then(res => {
                this.gender = res;
            }).catch(error => {
                console.error(error);
            }),
            getLookupByTypeName({ "typeName": "JOB STATUS" }).then(res => {
                this.jobStatus = res;
            }).catch(error => {
                console.error(error);
            })
    },
    mounted() {
        this.job.listingId = this.listedJob.jobListingId
        this.job.title = this.listedJob.title
        this.job.company = this.listedJob.school
        this.job.branch = this.listedJob.branch
        this.job.jobType = this.listedJob.jobType
        this.job.employeeLocation = this.listedJob.location
        this.job.description = this.listedJob.description
        this.job.gender = this.listedJob.gender
        this.job.status = this.listedJob.status
    },
    methods: {
        closeWindow() {
            this.$router.push({ name: 'Home' })
        },
        updateJobListed() {
            createJobListing(this.job).then(res => {
                console.warn(res)
                if (res.code == 200) {
                    this.closeFun()
                } else {
                    console.error(res.message)
                }
            }).catch(e => {
                console.error(e)
            })
        }
    }
}
</script>

<style scoped>
@media(min-width: 1200px) {
    .job {
        background-color: #fff;
        border: 2px solid lightblue;
        border-radius: 20px;
        padding: 10px;
        max-height: 580px;
        overflow-y: auto;
    }
}

@media(max-width: 1200px) {
    .job {
        overflow-x: auto;
        width: -webkit-fill-available;
        max-height: 600px;
        background-color: #fff;
        border: 2px solid lightblue;
        border-radius: 5px;
        padding: 10px;
    }
}

.job .head {
    display: flex;
    flex-direction: row-reverse;
}

.job i {
    color: orangered;
    font-size: 24px;
}

.form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
    font-size: larger;
    font-weight: bold;
}

input {
    border-radius: 20px;
    height: 20px;
    font-size: larger;
    padding: 10px;
    border: 2px solid 2px solid cadetblue;
}

select {
    border-radius: 20px;
    /* height: 20px; */
    font-size: larger;
    padding: 10px;
    border: 2px solid 2px solid cadetblue;
}

textarea {
    padding: 10px;
    font-size: larger;
    border-radius: 20px;
    border: 1px solid cadetblue;
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
}

button:hover {
    background-color: white;
    color: #0984e3;
    border: 1px solid #0984e3
}
</style>