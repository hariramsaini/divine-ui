<template>
    <div v-if="!show">
        <h1>All Listed Jobs</h1>
        <div class="jl-level-1" v-on:scrollend="getListedJobs" v-on:touchend="getListedJobs">
            <table class="tb">
                <tr class="trHead">
                    <th>Job Id</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Post Date</th>
                    <th></th>
                </tr>
                <tr class="trBody" v-for="item in jobs" :key="item">
                    <td>{{ item.jobListingId }}</td>
                    <td> {{ item.title }}</td>
                    <td> {{ item.status }}</td>
                    <td> {{ item.listedDate }}</td>
                    <td><button @click=" show = !show, openUpdate(item)">Update</button>
                    </td>
                </tr>
            </table>

        </div>
    </div>
    <div>
        <component :is="updatedJobcomp" v-if="show" :hideNewJobBtn="funHideNewPostButton" :closeUpdate="closeWindow"
            :listedJob="job">
        </component>
    </div>
</template>

<script>
import { allJobsPosted } from '@/services/DivineService';
import JobListingUpdate from './JobListingUpdate.vue';
import { defineAsyncComponent } from 'vue';
export default {
    name: 'JobsListed',
    data() {
        return {
            jobs: [],
            pageNo: 1,
            pageSize: 15,
            totalRecords: 0,
            totalPages: 1,
            pageCount: 0,
            show: false,
            job: null,
            updatedJobcomp: ''
        }
    },
    components: {
        JobListingUpdate
    },
    props: {
        funHideNewPostButton: Function
    },
    mounted() {
        this.getListedJobs()
    },
    methods: {
        getListedJobs() {
            this.pageCount++;
            if (this.pageCount <= this.totalPages) {
                const req = {
                    "pageNo": this.pageNo,
                    "pageSize": this.pageSize,
                    "totalRecords": this.totalRecords
                }

                if (this.jobs.length == 0 || this.jobs.length < this.totalRecords) {
                    allJobsPosted(req).then(res => {
                        console.warn(res)
                        if (res.status == 200) {
                            const data = res.data.data
                            for (let index = 0; index < data.length; index++) {
                                if (!this.jobs.includes(data[index].jobListingId)) {
                                    this.jobs.push(data[index])

                                }
                            }

                            this.totalRecords = res.data.totalRecords
                            this.totalPages = res.data.pageCounts
                        } else {
                            console.warn(JSON.stringify(res.data))
                        }
                    }).catch(error => {
                        console.error(error);

                    })
                }

                if (this.pageNo < this.totalPages || this.pageNo == 1) {
                    this.pageNo++;
                }
            }
        },

        closeWindow() {
            this.jobs = []
            this.pageNo = 1
            this.totalRecords = 0
            this.totalPages = 1
            this.pageCount= 0,
            this.getListedJobs()
            this.show = false
            console.warn('update closed')
        },

        openUpdate(job) {
            this.show = true
            this.job = job
            this.updatedJobcomp = defineAsyncComponent(() => import('./JobListingUpdate.vue'));
            this.funHideNewPostButton()
        }
    }
}
</script>

<style scoped>
.jl-level-1 {
    border: 2px solid cadetblue;
    border-radius: 5px;
    padding: 5px;
    max-height: 400px;
    overflow-x: auto;
}

.jl-level-2 {
    display: flex;
    border: 1px solid cadetblue;
    border-radius: 20px;
    justify-content: space-between;
    flex-direction: row;
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 10px;
}

.tb {
    width: 100%;
}

.trHead {
    background: skyblue;
    font-size: x-large;
}

.trBody {
    background-color: gainsboro;
    font-size: larger;
}

.trBody button {
    font-size: large;
    border: 1px solid #0984e3;
    background-color: #0984e3;
    border-radius: 20px;
    color: white;
    width: 100px;
    margin: 1px;
}

.trBody button:hover {
    font-size: larger;
    border: 1px solid #0984e3;
    background-color: white;
    color: #0984e3;
}
</style>