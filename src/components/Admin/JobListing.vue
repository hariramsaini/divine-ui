<template>
    <div class="job">
        <div class="head"> <i class="fa fa-window-close" aria-hidden="true" @click="fun"></i></div>
        <h1>Job Details</h1>
        <label for="title">Job Title:</label>
        <input type="text" id="title">
        <label for="employer">Employer:</label>
        <input type="text" id="employer">
        <label for="jobType">Job Type:</label>
        <input type="text" id="jobType">
        <label for="location">Location:</label>
        <input type="text" id="location">
        <label for="gender">Gender:</label>
        <input type="text" id="gender">
        <button @click="fun">Hide</button>
    </div>
</template>

<script>
export default {
    name: 'JobListing',
    props: {
        fun: Function
    }
}
</script>

<style scoped>
.job {
    width: 60%;
    max-height: 500px;
    background-color: darkgrey;
    border: 2px solid lightblue;
    border-radius: 20px;
    padding: 10px;
}

.job .head {
    display: flex;
    flex-direction: row-reverse;
}

.job i {
    color: white;
    font-size: 24px;
}
</style>