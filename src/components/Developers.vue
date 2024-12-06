<template>
    <HeaderComp></HeaderComp>
    <div class="main">
        <section stol>
            <p>This application is developed by our school students from class 5th to 8th by session 2023-24. Our school
                is the one who is giving software engineering training at initial level so childern can understand their
                ability and growup with futuristic knowledge along with the basic subjects knowledge. We understand that
                this is the age when whatever we will sow it will growup very strongly and will greate awesome future of
                these children.</p>
            <p>
                यह एप्लिकेशन हमारे स्कूल के कक्षा 5वीं से 8वीं तक के छात्रों द्वारा सत्र 2023-24 तक विकसित किया गया है।
                हमारा स्कूल
                वह है जो प्रारंभिक स्तर पर सॉफ्टवेयर इंजीनियरिंग प्रशिक्षण दे रहा है ताकि बच्चे उन्हें समझ सकें
                बुनियादी विषयों के ज्ञान के साथ-साथ भविष्य के ज्ञान के साथ क्षमता और विकास। हम समझते हैं कि यही वह उम्र
                है जब हम जो कुछ भी बोएंगे वह बहुत मजबूती से बड़ा होगा और इन बच्चों का भविष्य शानदार होगा।
            </p>
        </section>
        <section class="slider10th">
            <h1>Our Developers Team</h1>
            <Slider :data="data"></Slider>
        </section>
    </div>
</template>

<script>
import HeaderComp from './Header.vue';
import Slider from './Slider.vue';
export default {
    name: 'DevelopersComp',
    components: {
        HeaderComp,
        Slider
    },
    data() {
        return {
            data: {
                slideFor: 'dev',
                array: [
                    {
                        name: 'ABC',
                        img: '01.jpg',
                        class: '10th'
                    },
                    {
                        name: 'XYV',
                        img: "02.avif",
                        class: '10th',
                    },
                    {
                        name: 'XYZ',
                        img: "03.jpeg",
                        class: '10th',
                    },
                    {
                        name: 'SDFG',
                        img: "04.jpg",
                        class: '10th',
                    },
                ]
            }
        }
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
    }

    .slider10th {
        width: 100%;
        margin-bottom: 50px;
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

    .slider10th {
        width: 70%;
    }

    p {
        font-size: larger;
        color: darkblue;
    }
}
</style>
