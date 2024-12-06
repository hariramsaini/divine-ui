<template>
    <div class="container">
        <TabWrapper>
            <tab title="Home" class="home">

                <section class="Results">
                    <h2>Results</h2>
                    <div class="header">
                        <button @click="openUpload()">Upload</button>
                        <button @click="deleteFile()" v-if="selectedImages.length > 0">Delete</button>
                        <FileLoad maxImgSize=10 UnitTypeOfSize="MB" url="/dms/uploadFiles" screen="Home" section="10th"
                            :reloadMethod="reload" ref="fileUpload">
                        </FileLoad>
                    </div>
                    <div class="inner-container">
                        <div v-for="item in section10th" :key="item">
                            <img :src="`data:image/png;base64,${item.base64}`" alt="">
                            <input type="checkbox" :value="item.fileId" v-model="selectedImages">
                        </div>
                    </div>
                </section>
                <span
                    style="background-color: lightblue; width: 100%; height: 3px; margin-bottom: 10px; margin-top: 10px;"></span>
                <section class="10th" style="border: none; width: 99%; margin: 10px;">
                    <h2>More Sections</h2>
                </section>
            </tab>
            <tab title="Careers">Hello From Tab 2</tab>
            <tab title="Tab 3">Hello From Tab 3</tab>
            <tab title="Tab 4">Hello From Tab 4</tab>
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
            selectedImages: []
        }
    },
    created() {
        this.getFiles()
    },
    methods: {
        reload() {
            this.getFiles()
        },
        getFiles() {
            const req = { "screen": "Home", "section": "10th" }
            getFiles(req).then(res => {
                console.warn(JSON.stringify(res.data.data))
                if (res.status == 200) {
                    const data = res.data.data
                    this.section10th = data
                } else {
                    console.warn(JSON.stringify(res.data))
                }
            }).catch(error => {
                console.error(error);

            })
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
        }
    }

}
</script>

<style scoped>
.container {
    background-color: aliceblue;
    padding: 10px 20px;
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
    flex-direction: column;
    align-items: center;
    border: 1px solid lightblue;
    border-radius: 10px;
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

h2 {
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