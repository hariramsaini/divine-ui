<template>
    <Header></Header>
    <div class="career-container">
        <div class="career-header">
            <h1>Job Opennings</h1>
        </div>
        <div class="career-main">
            <div class="jobs">
                <div v-for="item in jobs" :key="item">
                    <div class="job-tiles">
                        <h2>{{ item.title }}</h2>
                        <h4>Date: {{ item.listedDate }}</h4>
                        <h4>Location: {{ item.branch }}</h4>
                        <router-link :to="{ name: 'JobDescription', params: { id: item.jobListingId } }"
                            style="text-decoration: none;">Job Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import Header from './Header.vue';
import { getJobsListed } from '@/services/DivineService';

export default {
    name: 'CareersComp',
    components: {
        Header
    },
    data() {
        return {
            jobs: [],
            pageNo: 1,
            pageSize: 15,
            totalRecords: 0,
            totalPages: 1,
        }
    },
    setup() {
        useHead({
            //Can be static or computed
            title: `Job Openings At | Divine English Academy Radhakishanpura`,
            meta: [
                {
                    name: `description`,
                    content: 'Explore Career Opportunities at Divine English Academy - Join Our Team of Educators Discover exciting career opportunities at Divine English Academy! We are dedicated to excellence in education and are looking for passionate, talented individuals to join our team. Explore available positions, learn about our supportive work environment, and apply today to make a difference in the lives of our students.',

                },

            ]
        })
    },
    mounted() {
        this.getListedJobs()
    },
    methods: {
        getListedJobs() {
            //console.warn('this is careers comp')
            const req = {
                "pageNo": this.pageNo,
                "pageSize": this.pageSize,
                "totalRecords": this.totalRecords
            }

            if (this.jobs.length == 0 || this.jobs.length < this.totalRecords) {
                getJobsListed(req).then(res => {
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
        },
    }
}
</script>

<style scoped>
.career-container {
    width: 100%;
    height: 100%;
}

.career-header {
    width: 100%;
    margin-top: 100px;
}

.career-header h1 {
    color: darkblue;
}

@media(max-width: 1200px) {
    .career-header {
        margin-top: 110px;
    }
}

.career-main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}


.jobs {
    display: flex;
    justify-content: space-evenly;
    /*align-items: center;*/
    flex-wrap: wrap;
    margin: 20px;
    border: 1px solid cornflowerblue;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 10px;
    position: relative;
    margin-bottom: 130px;
}

.job-tiles {
    width: 280px;
    border: 2px solid cornflowerblue;
    border-radius: 20px;
    padding: 10px;
    margin: 5px;
}

.job-tiles h2 {
    margin: 0;
}

.job-tiles h4 {
    margin: 2px;
    margin-bottom: 5px;
}

a :hover {
    background: white;
    color: darkblue;
}

a {
    text-decoration: none;
    background: darkblue;
    border-radius: 20px;
    padding: 5px;
    margin: 10px;
    color: white;
}
</style>