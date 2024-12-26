<template>
    <div class="container">
        <TabWrapper>
            <tab title="Home" class="home">

                <TabWrapper>
                    <tab title="Result" class="result">
                        <Results></Results>
                    </tab>
                    <tab title="Special Benefits" class="result">
                        <SpecialBenefits></SpecialBenefits>
                    </tab>
                </TabWrapper>
            </tab>
            <tab title="Careers">
                <Div class="careers">
                    <button @click="showNewJobPost = true">Post New Job</button>
                    <div>
                        <JobListing :fun="hideNewJobPosting" v-show="showNewJobPost"></JobListing>
                    </div>
                </Div>
            </tab>
            <tab title="Developers">
                <AdminDevelopers></AdminDevelopers>
            </tab>
        </TabWrapper>
    </div>
</template>

<script>
import Tab from '@/Tabs/Tab.vue';
import TabWrapper from '@/Tabs/TabWrapper.vue';
import JobListing from './JobListing.vue';
import Results from './Results.vue';
import SpecialBenefits from './SpecialBenefits.vue';
import AdminDevelopers from './AdminDevelopers.vue';

export default {
    name: 'AdminHome',
    components: {
        Tab,
        TabWrapper,
        JobListing,
        Results,
        SpecialBenefits,
        AdminDevelopers
    },
    data() {
        return {
            showNewJobPost: false
        }
    },

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