<template>
    <div>
        <input type="file" @change="uploadFile" />
        <div v-if="uploading">
            <progress :value="progress" max="100"></progress>
            <span>{{ progress }}%</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progress: 0,
            uploading: false,
        };
    },
    methods: {
        uploadFile(event) {
            const file = event.target.files[0];
            if (file) {
                this.uploading = true;
                const formData = new FormData();
                formData.append('file', file);

                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/upload', true);

                xhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable) {
                        this.progress = Math.round((e.loaded / e.total) * 100);
                    }
                });

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        this.uploading = false;
                        if (xhr.status === 200) {
                            console.log('Upload complete');
                        } else {
                            console.error('Upload failed');
                        }
                    }
                };

                xhr.send(formData);
            }
        },
    },
};
</script>

<style scoped>
progress {
    width: 100%;
    height: 20px;
}
</style>