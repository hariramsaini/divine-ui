<template>
    <Header></Header>
    <div class="pp-top">
        <div class="ppHead">
            <h1>Privacy Policy</h1>
            <hr>
        </div>
        <div class="ppSlide">
            <h2 style="margin: 0;">Slider</h2>
        </div>
        <div class="ppContent">

            <p>This privacy policy sets out how Divine English Academy uses and protects any information that you
                give
                while you
                use this website. We are committed to ensuring that your privacy is protected. All the information
                collected from you is subject to this privacy policy.</p>

            <h3>Information we collect</h3>
            <ul>
                <li v-for="item in info" :key="item">
                    <strong>{{ item.head }}</strong>
                    {{ item.desc }}
                </li>
            </ul>

            <h3>Use of your personal information</h3>
            <ul>
                <li v-for="item in pInfo" :key="item">
                    {{ item.desc }}
                </li>
            </ul>

            <h3>Sharing of information with third parties</h3>
            <ul>
                <li v-for="item in sharingInfo" :key="item">
                    {{ item.desc }}
                </li>
            </ul>

            <h3>Cookies</h3>
            <ul>
                <li v-for="item in cookies" :key="item">
                    {{ item.desc }}
                </li>
            </ul>

            <h3>Policy update</h3>
            <p>{{ policyUpdate }}</p>

            <h3>Contact Information</h3>
            <p>{{ contactInfo }}</p>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: 'PrivacyPolicy',
    components: {
        Header
    },
    data() {
        return {
            info: [
                { head: '1. Contact information:', desc: 'We might collect your name, email, mobile number, phone number, street, city, state, pin code, country, and IP address.' },
                { head: '2. Information you post:', desc: 'We collect information you post in a public space on our website or on a third-party social media site that is owned by us.' },
                { head: '3. Demographic information:', desc: 'We may collect demographic information about you, or any other information provided by you during the use of our website. We might collect this as a part of a survey also.' },
                { head: '4. Other information: ', desc: 'If you use our website, we may collect information about your IP address and the browser you are using. We might look at what site you came from, time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.' },
                { head: '5. We collect information in different ways:', desc: 'We collect information directly from you when you fill out any online application or request/inquiry forms that we include on our website or social media handles. We also collect information if you post a comment on a third-party social media site belonging to us or ask us a question by phone or email.' },
                { head: '6. We collect information from you passively:', desc: 'We use tracking tools like Google Analytics, browser cookies and other secure tools for collecting information about your usage of our website.' },
                { head: '7. We get information about you from third parties:', desc: 'We may get information from the third-party social media site about you. This could include your name, email address, and mobile number.' },
                // { head: 'head', desc: 'desc' }
            ],

            pInfo: [
                { head: 'head', desc: '1. We use the information you provide to reach out to you for promotional purposes.' },
                { head: 'head', desc: '2. We use information to respond to your requests or questions. We might use your information to confirm your application, if you have applied for any of our courses online.' },
                { head: 'head', desc: '3. We use information to improve our admission services. We might use your information to customise your experience with us. This could include displaying content based upon your preferences.' },
                { head: 'head', desc: '4. We use information to look at site trends and visitor interests. We may use your information to make our website and services better. We may combine the information we receive from you with the information we receive about you from third parties.' },
                { head: 'head', desc: '5. We use information for security purposes. We may use information to protect our organisation, our human resources, or our websites.' },
                { head: 'head', desc: '6. We use information for our marketing purposes.' },
                { head: 'head', desc: '7. We use information to send you transactional communications. We might send you relevant emails or SMS or WhatsApp.' },
                { head: 'head', desc: '8. We use information as otherwise permitted by law.' },

            ],
            sharingInfo: [
                { head: 'head', desc: '1. We will share information with third parties who perform any services on our behalf. We will share information with our business partners.' },
                { head: 'head', desc: '2. We may share information if we think we have to in order to comply with the law or to protect ourselves. We will share information to respond to a court order or to comply with any statutory requirement. We may also share it if a government agency or investigatory body requests, when investigating potential fraud.' },
            ],
            cookies: [
                { head: 'head', desc: '1. A cookie is a small file that asks permission to be placed on your computer\'s hard drive. Once you agree, the file is added, and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to patients’ needs. We only use this information for statistical analysis purposes and then the data is removed from the system.' },
                { head: 'head', desc: '2. Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. Cookies do not provide us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookie usage if you prefer. This may prevent you from taking full advantage of the website.' },
            ],
            policyUpdate: 'We reserve the right to modify any or all the terms of this policy at any time. You are advised to visit this page from time to time to review the current terms.',
            contactInfo: 'If users have any questions or suggestions regarding our privacy policy, please contact us at info@divineacademy.link'
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
        list-style: none;
        margin: 0;
    }

    .ppContent li {
        margin-bottom: 10px;
    }
}
</style>