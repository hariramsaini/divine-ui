<template>
    <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="item in data.array" :key="item" :virtualIndex="index">
            <img v-if="item.img" :src="require(`@/assets/students/${item.img}`)" :alt="item.img">

            <img v-if="!item.img" :src="`data:image/png;base64,${item.base64}`" :alt="item.img">
        </swiper-slide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    name: 'SliderComp',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    props: {
        data: Object
    },
    data() {
        return {
            width: 0
        }
    },
    updated() {
        this.width = window.innerWidth
    }
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media(min-width: 1200px) {
    .swiper-slide img {
        display: block;
        width: 80%;
        height: 500px;
        border-radius: 10px;
    }
}

@media(max-width: 1200px) {
    .swiper-slide img {
        display: block;
        width: 80%;
        height: calc(width * .30);
        border-radius: 10px;
    }
}

.details {
    padding-top: 10px;
}

.details h4 {
    color: darkcyan;
    margin: 0;
}

.details label {
    color: darkblue;
}
</style>