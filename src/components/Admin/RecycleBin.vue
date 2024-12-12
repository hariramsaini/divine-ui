<template>
    <div class="bin-container">
        <h1>Recycle Bin</h1>
        <div class="header">
            <button @click="clearBin()" v-if="binFiles.length > 0">Clear Bin</button>
            <button @click="restoreFile()" v-if="selectedImages.length > 0">Restore</button>
            <button @click="deleteFilePermanentaly()" v-if="selectedImages.length > 0">Delete Permanentaly</button>
        </div>
        <div class="inner-container">
            <div v-for="item in binFiles" :key="item">
                <img :src="`data:image/png;base64,${item.base64}`" alt="">
                <input type="checkbox" :value="item.fileId" v-model="selectedImages">
            </div>
        </div>
    </div>
</template>

<script>
import { deleteFilesPermanentaly, getBinFiles, restoreFiles } from '@/services/DmsService';


export default {
    name: 'RecycleBin',
    data() {
        return {
            binFiles: [],
            selectedImages: []
        }
    },
    created() {
        this.getBinFiles()
    },
    methods: {
        reload() {
            this.getBinFiles()
        },
        getBinFiles() {
            getBinFiles().then(res => {
                if (res.status == 200) {
                    this.binFiles = res.data.data
                } else {
                    console.warn(res.status)
                }
            })
                .catch(error => {
                    console.error(error)
                })
        },
        restoreFile() {
            const req = {
                files: this.selectedImages
            }
            restoreFiles(req).then(res => {
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
        clearBin() {
            if (confirm('Are you sure you want to delete this item?')) {
                for (let index = 0; index < this.binFiles.length; index++) {
                    this.selectedImages.push(this.binFiles[index].fileId);
                }
                const req = {
                    files: this.selectedImages
                }
                deleteFilesPermanentaly(req).then(res => {
                    if (res.status == 200) {
                        this.selectedImages = []
                        this.reload()
                    } else {
                        console.warn(JSON.stringify(res.data))
                    }
                }).catch(error => {
                    console.error(error);

                })
            }
        },
        deleteFilePermanentaly() {
            const req = {
                files: this.selectedImages
            }
            deleteFilesPermanentaly(req).then(res => {
                if (res.status == 200) {
                    this.selectedImages = []
                    this.reload()
                } else {
                    console.warn(JSON.stringify(res.data))
                }
            }).catch(error => {
                console.error(error);

            })
        }
    }
}
</script>

<style scoped>
.bin-container {
    background-color: aliceblue;
    margin-top: 10px;
    padding: 10px;
    width: -webkit-calc(100% - 12px);
}

.inner-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    overflow-y: auto;
    /* Enable vertical scrolling */
    max-height: 590px;
}

.header {
    display: flex;
    align-items: center;
    padding: 5px;
    border: 2px solid darkblue;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.header button {
    height: 30px;
    width: fit-content;
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

h1 {
    width: 100%;
    height: 40px;
    align-content: center;
    background-color: darkblue;
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

img {
    width: 300px;
    height: 200px;
    padding: 10px;
    border: 1px solid lightblue;
    border-radius: 20px;
    margin-bottom: 10px;
}
</style>