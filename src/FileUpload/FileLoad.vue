<template>
    <div class="FieldField_wrapper">

        <input type="file" multiple accept=".jpg,.jpeg,.png" name="image" id="file-field" @change="handleFileUpload"
            style="display: none;" ref="fileUpload">

        <!--h2 v-show="uploadVisible" style="color: #96c8ef;">Browse to Upload</h2-->

    </div>
</template>

<script>
import base_url from '@/data-types';
import { uploadFiles } from '@/services/DmsService';
import axios from 'axios';

export default {
    name: 'FileLoad',
    props: {
        maxImgSize: String,
        UnitTypeOfSize: String,
        url: String,
        screen: String,
        section: String,
        reloadMethod: Function
    },
    data() {
        return {
            uploadProgress: 0,
            imagePreview: "assets/uploadFile/upload.svg",
            imgnew: [],
            uploadVisible: true,
            fileFormat: '',
            base64: String,
            fileSize: '',
            size: 0,
            previousVal: [],
            files: [],
            requestPayload: Object,
            selectedFiles: [],
            file: '',
            picture: ''
        }
    },
    methods: {
        openUpload() {
            document.getElementById('file-field').click()
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
                    this.reloadMethod()
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

        updatePreview(event) {
            var reader, files = event.target.files;
            if (files.length === 0 && this.uploadVisible == true) {
                console.warn('Select a file')
                this.uploadVisible = true
            }

            else if (files.length === 0 && this.uploadVisible == false) {
                console.warn('File not selected')
                this.imgnew = this.previousVal
            }

            else {
                for (let index = 0; index < files.length; index++) {
                    const file = files[index];

                    if (this.UnitTypeOfSize == 'MB') {
                        this.size = (file.size / (1024 * 1024))
                    } else {
                        this.size = (file.size / (1024))
                    }
                    if (this.size == this.maxImgSize) {
                        //console.warn(this.size.toString().substring(0, this.size.toString().indexOf('.')))
                        alert('File size must be less or equal to 500kb')
                        event.target.value = ''
                    } else {

                        this.uploadVisible = false
                        reader = new FileReader();

                        reader.onload = (event) => {
                            console.warn(event.target.result)
                            this.imgnew.push(event.target.result)
                            this.previousVal.push(event.target.result)
                        }

                        reader.onloadend = async (event) => {
                            const img = event.target.result;
                            this.fileFormat = img.substring(img.indexOf('/'), img.indexOf(';'))
                                .replace('/', '')
                            this.base64 = img.substring(img.indexOf(','), img.length)
                                .replace(',', '')

                            const file = {
                                fileName: '',
                                fileType: this.fileFormat,
                                base64: this.base64
                            }

                            this.files.push(file)
                            console.warn('>>> ' + JSON.stringify(this.files))
                            this.requestPayload = {
                                applicationId: '00',
                                screen: this.screen,
                                section: this.section,
                                files: this.files
                            }
                            console.warn(base_url + this.url)
                            const result = await axios.post(base_url + this.url, JSON.stringify(this.requestPayload), {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                onUploadProgress: (progressEvent) => {
                                    this.uploadProgress = Math.round(
                                        (progressEvent.loaded * 100) / progressEvent.total
                                    );
                                },
                            }).then((response) => {
                                // Handle successful upload
                                console.log(response);
                                this.uploadProgress = 0; // Reset progress
                            })
                                .catch((error) => {
                                    // Handle error
                                    console.error(error);
                                    this.uploadProgress = 0; // Reset progress
                                });
                            console.warn(JSON.stringify(result))
                        }


                        reader.readAsDataURL(file)

                    }

                }

            }


        },
        showDeleteIcon(index) {
            document.getElementById(index).style.display = 'block'
        },
        hideDeleteIcon(index) {
            document.getElementById(index).style.display = 'none'
        },
        deleteImage(index) {
            console.warn(this.imgnew.length)
            console.warn(index)
            if (this.imgnew.length == 1) {
                this.uploadVisible = true
            }
            this.imgnew.splice(index, 1)
        },
        clearInputField() {
            document.getElementById('file-field').value = ""
        }
    }
}
</script>

<style scoped>
.FieldField_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.preview-image {
    width: 300px;
    padding: 30px;
    border: 2px solid lightblue;
    border-radius: 10px;
}

.uploaded-images {
    display: flex;
    align-items: left;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.images {
    width: 300px;
    height: 200px;
    margin: 10px;
    padding: 30px;
    border: 2px solid lightblue;
    border-radius: 10px;
}

.images:hover {
    background-color: lightblue;
}

.image-div {
    display: flex;
}

.icon-image {
    width: 25px;
    height: 20px;
    position: static;
    margin-top: 20px;
    display: none;
}

.progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
}

.progress-bar-fill {
    height: 20px;
    background-color: #4caf50;
    width: 0%;
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
}
</style>