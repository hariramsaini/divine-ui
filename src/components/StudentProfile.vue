<template>
    <div class="sp-main">
        <div class="sp-header">
            <h1>Divine English Academy..</h1>

        </div>

        <div class="s-profile">
            <h1>Student Profile</h1>
        </div>
        <div class="sp-middle">
            <div class="left">
                <h1>Basic Details</h1>
                <div>
                    <label for="">Roll Number: </label>
                    <input type="text" v-model="rollNo">
                    <label for="">Student Name: </label>
                    <input type="text" v-model="name">
                    <label for="">Class: </label>
                    <input type="text" v-model="classVar">
                    <label for="">Class Teacher: </label>
                    <input type="text" v-model="classTecher">
                </div>
                <h1>Marks as per Subject</h1>
                <div>
                    <label for="">Hindi: </label>
                    <input type="text" v-model="hindi">
                    <label for="">English: </label>
                    <input type="text" v-model="enlish">
                    <label for="">Math: </label>
                    <input type="text" v-model="math">
                    <label for="">SST: </label>
                    <input type="text" v-model="sst">
                    <label for="">Science: </label>
                    <input type="text" v-model="science">
                    <label for="">Other: </label>
                    <input type="text" v-model="other">
                </div>
            </div>

            <div class="right">
                <div class="p-pic">
                    <img src="../assets/passportpic.jpg" alt="profile-pic" style="width: 100px;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SudentProfile",
    data() {
        return {
            name: '',
            rollNo: '',
            classVar: '',
            classTecher: '',
            hindi: '',
            english: '',
            math: '',
            sst: '',
            science: '',
            other: ''
        }
    }
}
</script>

<style scoped>
.sp-header {
    background-color: skyblue;
    display: flex;
    justify-content: space-between;
}

.sp-middle {
    display: flex;
}

.s-profile{
    background-color: blueviolet;
}
.left {
    width: 70%;
}

.right {
    width: 30%;
    ;
}
</style>