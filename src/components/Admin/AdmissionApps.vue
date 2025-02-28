<template>
    <div class="admission-main" v-on:click="getAdmissionApps" v-on:wheel="getAdmissionApps"
        v-on:touchend="getAdmissionApps">
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
            <tr class="tableB" v-for="item in applications" :key="item">
                <td>{{ item.applicationId }}</td>
                <td>{{ item.sName }}</td>
                <td>{{ item.fName }}</td>
                <td>{{ item.class }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.address }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { getAddmissionEnquiries } from '@/services/DivineService';

export default {
    name: 'AdmissionApps',
    data() {
        return {
            applications: [],
            pageNo: 1,
            pageSize: 10,
            totalRecords: 0,
            totalPages: 1,
            pageCount: 0
        }
    },
    mounted() {
        this.getAdmissionApps()
    },
    methods: {
        getAdmissionApps() {
            this.pageCount++;
            if (this.pageCount <= this.totalPages) {
                const req = {
                    "pageNo": this.pageNo,
                    "pageSize": this.pageSize,
                    "totalRecords": this.totalRecords,
                    "searchBy": "",
                    "searchArgument": ""
                }
                if (this.applications.length == 0 || this.applications.length < this.totalRecords) {
                    getAddmissionEnquiries(req).then(res => {
                        //console.warn(JSON.stringify(res))
                        if (res.status == 200) {
                            const data = res.data.data
                            for (let index = 0; index < data.length; index++) {
                                //console.warn("this.applications.find(data[index])"+this.applications.find(data[index]))
                                if (!this.applications.includes(data[index])) {
                                    this.applications.push(data[index])
                                }

                            }

                            this.totalRecords = res.data.totalRecords
                            this.totalPages = res.data.pageCounts
                            //console.warn("Response:  " + JSON.stringify(res.data))
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
    }
}
</script>

<style scoped>
.admission-main {
    width: 100%;
    background-color: lightcyan;
    max-height: calc(100vh - 300px);
    overflow-y: auto;
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
