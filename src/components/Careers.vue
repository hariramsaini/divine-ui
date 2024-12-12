<template>
    <Header></Header>
    <div class="career-container">
        <div class="career-header">
            <h1>Job Opennings</h1>
        </div>
        <div class="career-main">
            <!--table>
                <tr class="tableH">
                    <th>Job Id</th>
                    <th>Designation</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                <tr class="tableB" v-for="item in jobs" :key="item">
                    <td>{{ item.id }}</td>
                    <td>{{ item.designation }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.description }}</td>
                    <td><router-link to="/jobdetails"> Apply </router-link></td>
                </tr>
            </table-->
            <div class="jobs">
                <div v-for="item in jobs" :key="item">
                    <div class="job-tiles">
                        <h2>{{ item.designation }}</h2>
                        <h4>Date: {{ item.date }}</h4>
                        <h4>Location: Sikar</h4>
                        <router-link to="/jobdetails"> Job Details </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: 'CareersComp',
    components: {
        Header
    },
    data() {
        return {
            jobs: [
                {
                    id: '001',
                    designation: 'Maths Teacher',
                    date: '10-10-2024',
                    description: 'From class 1 to 10'
                },
                {
                    id: '002',
                    designation: 'Maths Teacher',
                    date: '10-10-2024',
                    description: 'From class 1 to 10'
                },
                {
                    id: '003',
                    designation: 'Maths Teacher',
                    date: '10-10-2024',
                    description: 'From class 1 to 10'
                },
                {
                    id: '004',
                    designation: 'Maths Teacher',
                    date: '10-10-2024',
                    description: 'From class 1 to 10'
                },
                {
                    id: '005',
                    designation: 'Maths Teacher',
                    date: '10-10-2024',
                    description: 'From class 1 to 10'
                }
            ]
        }
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
    color: #3F51B5;
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

table {
    width: 100%;
    border: 1px solid darkblue;
}

.tableH {
    background: darkcyan;
}

.tableH th {
    padding: 5px;
    font-size: larger;
}

.tableB {
    background: whitesmoke;
}

.tableB td {
    padding: 10px;
    font-size: large;
}

.tableB td a {
    text-decoration: none;
}

.tableB td a:hover {
    color: darkcyan;
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
}

a :hover {
    background: lightblue;
}

a {
    text-decoration: none;
}
</style>