<template>
    <div class="dashboard-container">
        <div>
            <div style="display: flex;">
                <button @click="selected('admission'), openTag('admission')" ref="admission">Admission</button>
                <button @click="selected('jobs'), openTag('jobs')" ref="jobs">Jobs</button>
            </div>
            <component :is="tag"></component>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import AdmissionApps from './AdmissionApps.vue';
export default {
    name: 'AdminHome',
    components: {
        AdmissionApps
    },
    data() {
        return {
            tag: 'AdmissionApps'
        }
    },
    mounted() {
        this.selected('admission')
    },
    methods: {

        openTag(param) {
            if (param == 'admission') {
                this.tag = 'AdmissionApps'
            }
            if (param == 'jobs') {
                this.tag = defineAsyncComponent(() => import('./JobApplications.vue'));
            }

        },
        selected(param) {
            if (param == 'admission') {
                this.$refs.admission.style.background = '#0984e3'
                this.$refs.admission.style.color = 'white'

                this.$refs.jobs.style.background = '#ddd'
                this.$refs.jobs.style.color = 'black'
            }
            if (param == 'jobs') {
                this.$refs.jobs.style.background = '#0984e3'
                this.$refs.jobs.style.color = 'white'

                this.$refs.admission.style.background = '#ddd'
                this.$refs.admission.style.color = 'black'
            }
        }
    }
}
</script>

<style scoped>
.dashboard-container {
    background-color: aliceblue;
    padding: 10px 20px;
    margin-top: 10px;
}

button {
    border: 0px;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 1px;
    background: blue;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
    margin-left: 10px;
    transition: 0.4s allease-out;
    width: 120px;
}
</style>