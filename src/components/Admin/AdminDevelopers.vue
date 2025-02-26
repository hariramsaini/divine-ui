<template>
    <div class="header">
        <button @click="openUpload()">Upload</button>
        <button @click="deleteFile()" v-if="selectedImages.length > 0">Delete</button>
        <button @click="unselectAll()" v-if="selectedImages.length > 0">Unselect</button>
        <input type="file" multiple accept=".jpg,.jpeg,.png" name="image" id="file-field-developers"
            @change="handleFileUpload" style="display: none;" ref="fileUpload">
    </div>
    <div class="inner-container" v-on:click="get10thImages" v-on:scrollend="get10thImages"
        v-on:touchend="get10thImages">
        <div v-for="(item, index) in section10th" :key="item">
            <img :src="`data:image/png;base64,${item.base64}`" alt="" ref="img" v-on:click="selectFiles(index)">
            <input type="checkbox" :value="item.fileId" v-model="selectedImages" ref="myCheckbox">
        </div>
    </div>
</template>

<script>
import { deleteFiles, getDashboardFiles, uploadFiles } from '@/services/DmsService';

export default {
    name: 'ResultsComp',
    data() {
        return {
            base64: 'sdf',
            showUpload: false,
            section10th: [],
            selectedImages: [],
            pageNo: 1,
            pageSize: 7,
            totalRecords: 0,
            totalPages: 1,
            pageCount: 0,
            showNewJobPost: false,
            screen: "Developers",
            section: "Developers"
        }
    },
    beforeMount() {
        this.reload()
    },
    methods: {
        reload() {
            this.section10th = [],
                this.pageNo = 1,
                this.totalRecords = 0,
                this.totalPages = 1,
                this.get10thImages()
        },

        get10thImages() {

            this.pageCount++;
            if (this.pageCount <= this.totalPages) {
                const req = {
                    "pageNo": this.pageNo,
                    "pageSize": this.pageSize,
                    "totalRecords": this.totalRecords,
                    request: { "screen": this.screen, "section": this.section }
                }
                if (this.section10th.length == 0 || this.section10th.length < this.totalRecords) {
                    getDashboardFiles(req).then(res => {
                        if (res.status == 200) {
                            const data = res.data.data
                            for (let index = 0; index < data.length; index++) {
                                if (!this.section10th.includes(data[index].docId)) {
                                    this.section10th.push(data[index])

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

        deleteFile() {
            const req = {
                screen: this.screen,
                section: this.section,
                files: this.selectedImages
            }
            deleteFiles(req).then(res => {
                if (res.status == 200) {
                    this.selectedImages = []
                    this.reload()
                } else {
                    console.warn(JSON.stringify(res.data))
                }
            }).catch(error => {
                console.error(error);

            })
        },

        handleFileUpload(event) {
            this.selectedFiles = event.target.files;

            if (this.selectedFiles.length > 0) {
                this.uploadVisible = false
                this.uploadFiles()
            } else {
                this.uploadVisible = true
            }
        },

        async uploadFiles() {
            const formData = new FormData();
            formData.append('screen', this.screen)
            formData.append('section', this.section)

            for (let i = 0; i < this.selectedFiles.length; i++) {
                formData.append('files', this.selectedFiles[i]);
            }

            uploadFiles(formData).then((response) => {
                // Handle successful upload
                if (response.status == 200) {
                    this.reload()
                    this.uploadProgress = 0; // Reset progress
                } else {
                    console.log(response);
                }

            })
                .catch((error) => {
                    // Handle error
                    console.error(error);
                    this.uploadProgress = 0; // Reset progress
                });
        },

        openUpload() {
            document.getElementById('file-field-developers').click()
        },

        selectFiles(index) {
            if (this.$refs.img[index].style.border == '1px solid red' && this.$refs.myCheckbox[index].checked == true) {
                this.$refs.img[index].style.border = ''
                this.$refs.myCheckbox[index].checked = false
                this.selectedImages.pop(this.$refs.myCheckbox[index].value)
            } else {
                this.$refs.img[index].style.border = '1px solid red'
                this.$refs.myCheckbox[index].checked = true
                this.selectedImages.push(parseInt(this.$refs.myCheckbox[index].value))
            }
            console.warn(this.selectedImages)
        },

        unselectAll() {
            for (let index = 0; index < this.section10th.length; index++) {
                this.$refs.img[index].style.border = '';
                this.$refs.myCheckbox[index].checked = false
                this.selectedImages = []
            }

        },

        hideNewJobPosting() {
            this.showNewJobPost = false
        }
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

.inner-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    overflow-y: auto;
    /* Enable vertical scrolling */
    max-height: 500px;
    width: 100%s;
}

@media(max-width: 1200px) {
    .inner-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        overflow-y: auto;
        /* Enable vertical scrolling */
        max-height: 530px;
        width: 100%s;
    }
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