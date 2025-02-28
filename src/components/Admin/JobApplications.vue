<template>

    <div class="jobs-main" v-on:click="getAdmissionApps" v-on:wheel="getAdmissionApps"
        v-on:touchend="getAdmissionApps">

        <table>
            <tr class="tableH">
                <th>Application Id</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Job</th>
                <th>Gender</th>
                <th>Address</th>
                <th></th>
            </tr>
            <tr class="tableB" v-for="item in jobApplications" :key="item">
                <td>{{ item.jobAppId }}</td>
                <td>{{ item.fullName }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.contactNo }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.address }}</td>
                <td>
                    <div class="whatsapp-logo">
                        <button @click="downloadResume(item.eLocation)">Download Resume</button>
                        <a :href="`https://wa.me/${item.contactNo}`" target="_blank">
                            <img src="@/assets/wa-logo.png" alt=""
                                style="width: 25px; border-radius: 100%; margin-left: 10px;">
                        </a>
                    </div>
                </td>

            </tr>
        </table>
    </div>
</template>

<script>
import { downloadResume, getJobApplication } from '@/services/DivineService';

export default {
    name: 'JobApplication',

    data() {
        return {
            jobApplications: [],
            pageNo: 1,
            pageSize: 30,
            totalRecords: 0,
            totalPages: 1,
            pageCount: 0,
            pdfData: ''
        }
    },
    mounted() {
        this.getJobApps()
    },

    methods: {
        getJobApps() {
            this.pageCount++;
            if (this.pageCount <= this.totalPages) {
                const req = {
                    "pageNo": this.pageNo,
                    "pageSize": this.pageSize,
                    "totalRecords": this.totalRecords,
                    "searchBy": "",
                    "searchArgument": ""
                }
                if (this.jobApplications.length == 0 || this.jobApplications.length < this.totalRecords) {
                    getJobApplication(req).then(res => {
                        //console.warn(JSON.stringify(res))
                        if (res.code == 200) {
                            const data = res.data
                            for (let index = 0; index < data.length; index++) {
                                this.jobApplications.push(data[index])
                            }
                            this.totalRecords = res.data.totalRecords
                            this.totalPages = res.data.pageCounts
                            //console.warn("Response:  " + JSON.stringify(res.data))
                        } else {
                            console.warn("else" + JSON.stringify(res.data))
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

        downloadResume(eLocation) {
            //console.warn(eLocation)
            let filePath = JSON.stringify(eLocation)
            const extension = filePath.substring(filePath.lastIndexOf('.'), filePath.length)
            const req = {
                "file": {
                    "filePath": eLocation
                }
            }

            downloadResume(req).then(res => {
                if (res.code == 200) {
                    const base64 = res.data;
                    // console.log(res.data)
                    if (extension == 'pdf') {
                        this.pdfData = 'data:application/pdf;base64,' + base64
                    } else {
                        this.pdfData = 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,' + base64
                    }


                    var download_anchor = document.createElement("a");
                    download_anchor.href = this.pdfData;
                    if (extension == 'pdf') {
                        download_anchor.download = 'resume.pdf';
                    } else {
                        download_anchor.download = 'resume.docx';
                    }

                    download_anchor.click();
                } else {
                    console.error(res.message);
                }
            })
                .catch(e => {
                    console.error(e)
                })
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

.jobs-main {
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

button {
    border: 1px;
    border-radius: 10px;
    background: cornflowerblue;
    color: white;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
    transition: 0.4s allease-out;
}

.whatsapp-logo {
    display: flex;
    align-items: center;
}
</style>