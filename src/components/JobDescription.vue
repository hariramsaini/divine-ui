<template>
    <div class="main">
        <div v-show="showDesc">
            <h1>Job Description</h1>
            <div class="details" v-if="job != ''">
                <div class="row">
                    <h2>Job Title: </h2>
                    <pre> </pre>
                    <p> {{ job.jobType }}</p>
                </div>
                <div class="row">
                    <h3>School: </h3>
                    <pre> </pre>
                    <p> {{ job.school }}</p>
                </div>
                <div class="row">
                    <h3>Branch: </h3>
                    <pre> </pre>
                    <p> {{ job.branch }}</p>
                </div>
                <div class="row">
                    <h3>Required Gender: </h3>
                    <pre> </pre>
                    <p> {{ job.gender }}</p>
                </div>
                <div class="row">
                    <h3>Post Date: </h3>
                    <pre> </pre>
                    <p> {{ job.listedDate }}</p>
                </div>
                <div class="row">
                    <h3>Status: </h3>
                    <pre> </pre>
                    <p> {{ job.status }}</p>
                </div>
                <h3> </h3>
                <label for="desc">Description:</label>
                <textarea name="" id="desc" v-model="job.description" disabled></textarea>
                <button @click="tab = 'ApplyForJob', showDesc = !showDesc">Apply</button>
                <div v-if="displaySuccess" class="success">
                    <p class="successP" ref="success"> Applied Successfully. We will get back soon. </p>
                </div>
            </div>
            <router-link to="/careers">Back to Careers</router-link>
        </div>
        <component :is="tab" v-if="!showDesc" :closeFun="closeApplyWindow" :job="job"></component>
    </div>
</template>

<script>
import { getJobListedById } from '@/services/DivineService';
import { useRoute } from 'vue-router';
import ApplyForJob from './ApplyForJob.vue';

export default {
    name: 'JobDescription',
    components: {
        ApplyForJob
    },
    data() {
        return {
            job: '',
            showDesc: true,
            tab: '',
            displaySuccess: false
        }
    },
    created() {
        const route = useRoute();

        let req = {
            "pageNo": 1,
            "pageSize": 15,
            "totalRecords": 0,
            "searchBy": "listing_id",
            "searchArgument": route.params.id

        }
        getJobListedById(req).then(res => {
            const data = res.data;
            if (data.code == 200) {
                if (data.data.length > 0) {
                    this.job = data.data[0]
                }
                //console.warn('Id Job get:' + JSON.stringify(this.job))
            } else {
                console.error(res.message)
            }
        }).catch(e => {
            console.error(e)
        })
    },
    methods: {
        closeApplyWindow(param) {
            this.displaySuccess = false
            this.showDesc = !this.showDesc
            this.tab = ''
            if (param != null) {
                this.displaySuccess = true
            }
        }
    }
}
</script>

<style scoped>
.main {
    width: 100%;
    padding: 140px;
    display: flex;
    flex-direction: column;
    border: 2px solid cadetblue;
    margin: 10px;
    padding-top: 20px;
}

.main h1 {
    color: darkblue;
}

.details {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.details label {
    font-weight: bold;
}

.details button {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid blue;
    background-color: blue;
    color: white;
    font-weight: bold;
    width: 100px;
    font-size: larger;
    border-radius: 20px;
    padding: 5px;
}

.details textarea {
    margin: 10px;
    width: 520px;
    height: 100px;
    max-height: 200px;
    overflow-x: auto;
    font-size: x-large;
    color: black;
    padding: 5px;
    border-radius: 20px;
    border: 2px solid cadetblue;
}

.details a {
    font-size: x-large;
}

.successP {
    color: green;
}

.row {
    display: flex;
    align-items: baseline;
}

.row p {
    font-size: larger;
}
</style>