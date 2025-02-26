<template>
    <div class="container">
        <TabWrapper>
            <tab title="Home" class="home">

                <TabWrapper>
                    <tab title="Result" class="result">
                        <Results></Results>
                    </tab>
                    <tab title="Special Benefits" class="result">
                        <component :is="SpecialBenefits" v-if="true"></component>
                    </tab>
                </TabWrapper>
            </tab>
            <tab title="Careers">
                <Div class="careers">
                    <button @click="showNewJobPost = !showNewJobPost" v-show="!showNewJobPost">Post New Job</button>
                    <div>
                        <component :is="JobsListed" v-if="!showNewJobPost" :funHideNewPostButton="hideNewJobPosting">
                        </component>
                    </div>
                    <div>
                        <JobListing :fun="hideNewJobPosting" v-show="showNewJobPost"></JobListing>
                    </div>
                </Div>
            </tab>
            <tab title="Developers">
                <component :is="AdminDevelopers" v-if="true"></component>
            </tab>
        </TabWrapper>
    </div>
</template>

<script>
import Tab from '@/Tabs/Tab.vue';
import TabWrapper from '@/Tabs/TabWrapper.vue';
import JobListing from './JobListing.vue';
import Results from './Results.vue';
import { defineAsyncComponent } from 'vue';

export default {
    name: 'AdminHome',
    components: {
        Tab,
        TabWrapper,
        JobListing,
        Results,

    },
    data() {
        return {
            showNewJobPost: false,
            SpecialBenefits: '',
            JobsListed: '',
            AdminDevelopers: ''
        }
    },
    methods: {
        hideNewJobPosting() {
            this.showNewJobPost = !this.showNewJobPost
        }
    },
    created() {
        // Lazy Loading Components
        setTimeout(() => {
            this.SpecialBenefits = defineAsyncComponent(() => import('./SpecialBenefits.vue'));
        }, 1000);
        setTimeout(() => {
            this.JobsListed = defineAsyncComponent(() => import('./JobsListed.vue'));
        }, 2000);
        setTimeout(() => {
            this.AdminDevelopers = defineAsyncComponent(() => import('./AdminDevelopers.vue'));
        }, 2000);
    }

}
</script>

<style scoped>
.container {
    background-color: aliceblue;
    padding: 10px;
    margin-top: 10px;
}

section {
    border: none;
    border-radius: 10px;
    width: 99%;
    margin: 20px;
}


.header {
    display: flex;
    align-items: center;
    padding: 5px;
    border-bottom: 2px solid darkblue;
    margin-bottom: 10px;
}

.header button {
    height: 35px;
    width: 100px;
    border: none;
    background-color: #0984e3;
    font-size: large;
    font-weight: bold;
    color: white;
    border-radius: 20px;
    margin-right: 20px;
}

.header button:hover {
    background-color: sandybrown;
    color: black;
}

.home {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid lightblue;
    border-radius: 10px;
    width: 100%;
}

.btn-upload {
    background-color: deepskyblue;
    border: 1px solid palegoldenrod;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    font-size: larger;
    font-weight: bold;
    color: white;
}

.btn-upload:hover {
    background-color: lightblue;
    color: black;
}

img {
    width: 300px;
    height: 200px;
    padding: 10px;
    border: 1px solid lightblue;
    border-radius: 20px;
    margin-bottom: 10px;
}

.careers {
    display: flex;
    flex-direction: column;
}

.careers button {
    height: 35px;
    width: 160px;
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

.careers button:hover {

    background-color: sandybrown;
    color: black;
}
</style>