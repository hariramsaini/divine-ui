<template>
    <div class="container">
        <TabWrapper>
            <tab title="Home" class="home">

                <TabWrapper>
                    <tab title="Result" class="result">
                        <div class="header">
                            <button @click="openUpload()">Upload</button>
                            <button @click="deleteFile()" v-if="selectedImages.length > 0">Delete</button>
                            <button @click="unselectAll()" v-if="selectedImages.length > 0">Unselect</button>
                            <FileLoad maxImgSize=10 UnitTypeOfSize="MB" url="/dms/uploadFiles" screen="Home"
                                section="10th" :reloadMethod="reload" ref="fileUpload">
                            </FileLoad>
                        </div>
                        <div class="inner-container"  v-on:click="getImages" v-on:scrollend="getImages" v-on:touchend="getImages">
                            <div v-for="(item, index) in section10th" :key="item">
                                <img :src="`data:image/png;base64,${item.base64}`" alt="" ref="img"
                                    v-on:click="selectFiles(index)">
                                <input type="checkbox" :value="item.fileId" v-model="selectedImages" ref="myCheckbox">
                            </div>
                        </div>
                    </tab>
                    <tab title="MoreSection" class="moreSections">
                        <section>
                            <h2>More Sections</h2>
                        </section>
                    </tab>
                </TabWrapper>
            </tab>
            <tab title="Careers">Hello From Tab 2</tab>
            <tab title="Developers">Hello From Tab 3</tab>
        </TabWrapper>
    </div>
</template>

<script>
import FileLoad from '@/FileUpload/FileLoad.vue';
import { deleteFiles, getFiles } from '@/services/DmsService';
import Tab from '@/Tabs/Tab.vue';
import TabWrapper from '@/Tabs/TabWrapper.vue';

export default {
    name: 'AdminHome',
    components: {
        Tab,
        TabWrapper,
        FileLoad
    },
    data() {
        return {
            base64: 'sdf',
            showUpload: false,
            section10th: [],
            selectedImages: [],
            pageNo: 1,
            pageSize: 7,
            totalRecords: 0,
            totalPages: 1
        }
    },
    created() {
        this.getImages()
    },
    methods: {
        reload() {
            this.section10th=[],
            this.pageNo= 1,
            this.totalRecords= 0,
            this.totalPages= 1,
            this.getImages()
        },
        getImages() {
            const req = {
                "pageNo": this.pageNo,
                "pageSize": this.pageSize,
                "totalRecords": this.totalRecords,
                request: { "screen": "Home", "section": "10th" }
            }
            if (this.section10th.length == 0 || this.section10th.length < this.totalRecords) {
                getFiles(req).then(res => {
                    if (res.status == 200) {
                        const data = res.data.data
                        for (let index = 0; index < data.length; index++) {
                            if (!this.section10th.includes(data[index].docId)) {
                                this.section10th.push(data[index])
                                
                            }
                        }

                        this.totalRecords = res.data.totalRecords
                        this.totalPages = res.data.pageCounts
                        console.warn("Response:  " + JSON.stringify(res.data))
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
        },
        deleteFile() {
            const req = {
                screen: "Home",
                section: "10th",
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
        openUpload() {
            this.$refs.fileUpload.openUpload()
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
    max-height: 600px;
    width: 100%s;
}

@media(max-width: 1200px){
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
    height: 30px;
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
</style>