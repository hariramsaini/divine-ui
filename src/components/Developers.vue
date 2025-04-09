<template>
    <HeaderComp></HeaderComp>
    <div ref="main">

    </div>
    <div class="main">
        <section class="left">
            <span>
                <p>This web application is developed by our school students from class 5th to 8th by session 2024-25.
                    Our
                    school
                    is the one who is giving software engineering training at initial level so childern can understand
                    their
                    ability and growup with futuristic knowledge along with the basic subjects knowledge. We understand
                    that
                    this is the age when whatever we will sow it will growup very strongly and will greate awesome
                    future of
                    these children.</p>
            </span>
            <span>
                <p>
                    यह वेब एप्लीकेशन हमारे स्कूल के कक्षा 5वीं से 8वीं तक के छात्रों द्वारा सत्र 2024-25 तक विकसित किया
                    गया
                    है।
                    हमारा स्कूल
                    वह है जो प्रारंभिक स्तर पर सॉफ्टवेयर इंजीनियरिंग प्रशिक्षण दे रहा है ताकि बच्चे उन्हें समझ सकें
                    बुनियादी विषयों के ज्ञान के साथ-साथ भविष्य के ज्ञान के साथ क्षमता और विकास। हम समझते हैं कि यही वह
                    उम्र
                    है जब हम जो कुछ भी बोएंगे वह बहुत मजबूती से बड़ा होगा और इन बच्चों का भविष्य शानदार होगा।
                </p>
            </span>
        </section>
        <section class="dev-slider" v-on:transitionstart="getDevelopersImages">
            <h1>Our Developers Team</h1>
            <Slider :data="developers"></Slider>
        </section>
    </div>
</template>

<script>
import { getFiles } from '@/services/DmsService';
import HeaderComp from './Header.vue';
import Slider from './Slider.vue';
import { useHead } from '@vueuse/head';
export default {
    name: 'DevelopersComp',
    components: {
        HeaderComp,
        Slider
    },
    data() {
        return {
            developers: {
                slideFor: 'student',
                array: []
            },
            pageNo: 1,
            pageSize: 2,
            totalRecords: 0,
            totalPages: 1
        }
    },
    beforeMount() {
        this.getDevelopersImages()
    },
    mounted() {
        this.scrollToTop()
    },
    methods: {

        reload() {
            this.getDevelopersImages()
        },

        getDevelopersImages() {
            const req = {
                "pageNo": this.pageNo,
                "pageSize": this.pageSize,
                "totalRecords": this.totalRecords,
                "request": { "screen": "Developers", "section": "Developers" }
            }
            if (this.developers.array.length == 0 || this.developers.array.length < this.totalRecords) {
                getFiles(req).then(res => {
                    if (res.status == 200) {
                        const data = res.data.data
                        for (let index = 0; index < data.length; index++) {
                            this.developers.array.push(data[index])
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
        },
        scrollToTop() {
            this.$refs.main.scrollIntoView({ behavior: 'smooth' });
        }
    },
    setup() {
        useHead({
            //Can be static or computed
            title: `Developers | Divine English Academy Radhakishanpura`,
            meta: [
                {
                    name: `description`,
                    content: 'Meet the Talented Student Developers Behind Divine English Academy\'s Web Application Discover the brilliant minds of Divine Academy who brought our web application to life. Learn about our dedicated student developers, their skills, and the innovative projects they\'ve worked on. Celebrate their achievements and explore the future leaders in technology and education.',

                },

            ]
        })
    }
}
</script>

<style scoped>
@media(max-width: 1200px) {
    .main {
        width: 100%;
        margin-top: 90px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 120px;
    }

    .left {
        width: 90%;
        border: 2px solid lightblue;
        border-radius: 20px;
        margin: 10px;
        background-color: lightblue;
        height: 600px;
    }

    .dev-slider {
        width: 100%;
        margin-bottom: 50px;
    }

    .dev-slider h1 {
        color: #3F51B5;
    }

    p {
        font-size: larger;
        color: darkblue;
        margin-bottom: 60px;
    }
}

@media(min-width: 1200px) {
    .main {
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .left {
        width: 60%;
        border: 2px solid lightblue;
        border-radius: 20px;
        margin: 10px;
        background-color: lightblue;
        height: 600px;
    }

    .dev-slider {
        width: 40%;
    }

    .dev-slider h1 {
        color: #3F51B5;
    }

    p {
        font-size: larger;
        color: darkblue;
        width: 90%;
        padding: 30px;
        text-align: justify;
    }
}
</style>
