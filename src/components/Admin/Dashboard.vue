<template>
    <div class="dashboard-container">
        <TabWrapper>
            <tab title="Admissions">

                <div class="career-main">
                    <table>
                        <tr class="tableH">
                            <th>Application Id</th>
                            <th>Student Name</th>
                            <th>Father's Name</th>
                            <th>Class</th>
                            <th>Contact No</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                        <tr class="tableB">
                            <td>1001</td>
                            <td>ABC</td>
                            <td>XYZ</td>
                            <td>8th</td>
                            <td>7737201905</td>
                            <td>abc@gmail.com</td>
                            <td>Ward 19,Sikar</td>
                        </tr>
                    </table>
                </div>

            </tab>
            <tab title="Jobs">Hello From Tab 2</tab>
            <tab title="Tab 3">Hello From Tab 3</tab>
            <tab title="Tab 4">Hello From Tab 4</tab>
        </TabWrapper>
    </div>
</template>

<script>
import Tab from '@/Tabs/Tab.vue';
import TabWrapper from '@/Tabs/TabWrapper.vue';
export default {
    name: 'AdminHome',
    components: {
        Tab,
        TabWrapper,
    },
}
</script>

<style scoped>
.dashboard-container {
    background-color: aliceblue;
    padding: 10px 20px;
    margin-top: 10px;
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