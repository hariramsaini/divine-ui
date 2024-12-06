<template>
    <Header></Header>
    <div class="career-container">
        <div class="career-header">
            <h1>Job Opennings</h1>
        </div>
        <div class="career-main">
            <table>
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
            </table>
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
}

.career-header {
    width: 100%;
    margin-top: 100px;
}

@media(max-width: 1200px) {
    .career-header {
        margin-top: 150px;
    }
}

.career-main {
    width: 100%;
    background-color: lightcyan;
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
</style>