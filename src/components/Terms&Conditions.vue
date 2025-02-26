<template>
    <Header></Header>
    <div class="pp-top">
        <div class="ppHead">
            <h1>Terms & Conditions</h1>
            <hr>
        </div>
        <div class="ppSlide">
            <h2 style="margin: 0;">Slider</h2>
        </div>
        <div class="ppContent">

            <p>Welcome to our website! If you continue to browse and use this website, you are agreeing to comply with
                and be bound by the following terms and conditions of use, which together with our privacy policy govern
                Divine English Academy’s relationship with you in relation to this website.</p><br>
            <p>The term “Divine” or “Divine English Academy” or “us” or “we” refers to the owner of the website whose
                office is situated at, Radhakishan Pura, Sikar, Rajasthan 332001.</p><br>
            <p>The term 'you' refers to a user or viewer of our website.</p>
            <h3>The use of this website is subject to the following terms of use:</h3>
            <ul>
                <li v-for="item in info" :key="item">
                    {{ item.desc }}
                </li>
            </ul>

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
    name: 'TermsConditions',
    components: {
        Header
    },
    data() {
        return {
            info: [
                { head: 'head', desc: 'The utilisation of the website is governed by the terms and conditions set forth herein. Please read them through thoroughly and carefully. Your use of this site indicates your acceptance of each of the Terms and Conditions of Use.' },
                { head: 'head', desc: 'The data, information, materials, and services provided on this website are for the use and benefit the students, parents, staff or any other third parties of the educational institutions managed by us.' },
                { head: 'head', desc: 'The website has been structured to provide information related to educational institutions and their activities. The material displayed on this website is for reference purposes only, does not purport to be a legal document and does not give rise to any legal obligation on the part of us. Though every effort is made to ensure the accuracy and currency of the contents featured on this website, the same should not be construed as a statement of law or used for any legal purpose. We accept no responsibility for the accuracy, completeness, usefulness or otherwise of the contents of the website. Users are advised to evaluate before acting on the information provided on the Website.' },
                { head: 'head', desc: 'The content on these pages is intended solely for your general information and use. We reserve the right to modify the site in any manner of whatsoever nature at any time, including but not limited to Terms and Conditions of Use without any prior notice.' },
                { head: 'head', desc: 'This website may contain copyrighted material, trademarks and other proprietary information including but not limited to items such as photography, video, graphics, text, software, and forms. Each of the items mentioned prior is subject to intellectual property laws. You may not modify, publish, display, transmit or subject yourself to the transfer or sale or in any form, exploit the content that exists on this website.' },
                { head: 'head', desc: 'You are strictly prohibited to upload, e-mail, post, or make available in any other manner any material on this website that is protected by intellectual property laws or other laws; that is, without direct permission in writing from us.' },
                { head: 'head', desc: 'In no event shall we be liable for any expense, loss, or damage, including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use or loss of use of data, arising out of or in connection with the use of this website.' },
                { head: 'head', desc: 'These terms and conditions shall be governed by and construed in accordance with the Indian laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts at Sikar, Rajasthan, India.' },
                //{ head: 'head', desc: 'desc' },
            ]
        }
    }
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
        font-weight: bold;
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