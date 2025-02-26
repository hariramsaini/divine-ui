<template>
    <Header></Header>
    <div class="pp-top">
        <div class="ppHead">
            <h1>Refund Policy</h1>
            <hr>
        </div>
        <div class="ppSlide">
            <h2 style="margin: 0;">Slider</h2>
        </div>
        <div class="ppContent">

            <p>In most cases, no refund will be granted once the payment is made. However, exceptions may be made based
                on the following circumstances:</p><br>
            <p>• Multiple payments for the same services</p><br>
            <p>• A candidate paid the fee online but did not get a confirmation due to a connection failure</p><br><br>
            <p>Transaction fees charged would not be refunded or reversed for any refund or reversal of any transaction.
            </p>

            <h3>Image Gallery</h3>
            <ul>
                <li v-for="item in pInfo" :key="item">
                    {{ item.desc }}
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: 'RefundPolicy',
    components: {
        Header
    },
}
</script>

<style scoped>
.pp-top {
    font-size: 17px;
    font-family: basic, sans-serif;
}

.ppHead {
    width: 100%;
}

.ppSlide {
    width: 100%;
}

.pp-top h1 {
    color: rgb(0, 58, 150);
}

.pp-top hr {
    border-top: 2px solid rgba(232, 230, 230) !important;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    width: 100%;
}

@media(min-width: 1200px) {
    .pp-top {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        margin-bottom: 110px;
        width: 100%;
        align-items: center;
    }

    .ppContent {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .ppContent p {
        text-align: justify;
        margin: 0;
        color: black;
    }

    .ppContent h3 {
        font-size: 20px;
        font-family: basic, sans-serif;
        color: #ed7900;
    }

    .ppContent ul {
        text-align: justify;
        margin: 0;
    }

    .ppContent li {
        margin-bottom: 10px;
    }
}
</style>