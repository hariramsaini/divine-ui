<template>
    <div class="footer" ref="ftr" id="ftr">
        <div class="footerHead">
            <h4>Divine English Academy</h4>
            <h5>One of Shkahawati's largest educational conglomerates, fostering excellence and shaping success stories
                across
                India since 2010.</h5>
            <div class="privacyPolicy">
                <div class="bigfooter-links">
                    <router-link to="/privacy-policy" class="link" target="_blank">Privacy Policy</router-link>
                </div>
                <a class="bar">|</a>
                <div class="bigfooter-links">
                    <router-link to="/terms-and-conditions" class="link" target="_blank">Terms &
                        Conditions</router-link>
                </div>
                <a class="bar">|</a>
                <div class="bigfooter-links">
                    <router-link to="/refund-policy" class="link" target="_blank">Refund Policy</router-link>
                </div>
            </div>
        </div>
        <div class="footer-level-1">
            <div class="contactUs">
                <h1>Contact Us</h1>

                <div class="contactUs-items">
                    <i class="fa fa-map-marker i-button" aria-hidden="true" @click="openApp('', 'map')"> </i>
                    <div>
                        <p>Radhakishan Pura,</p>
                        <p>Sikar,</p>
                        <p>Rajasthan 332001</p>
                    </div>
                </div>

                <div class="contactUs-items">
                    <i class="fa fa-phone i-button" aria-hidden="true" @click="openApp('+91-9928580651', 'phone')"></i>
                    <div>
                        <p>+91-9928580651</p>
                    </div>
                </div>

                <div class="contactUs-items">
                    <i class="fa fa-envelope" aria-hidden="true"
                        @click="openApp('info@divineacademy.link', 'mail')"></i>
                    <p>info@divineacademy.link</p>
                </div>
            </div>

            <div class="quickLinks">
                <h1>Quick Links</h1>
                <div style="display: flex; flex-direction: column;">
                    <div class="contactUs-items">
                        <router-link to="/bootcamp" class="link" target="_blank"><i class="fa fa-laptop"
                                aria-hidden="true"></i>Coding Bootcamp</router-link>
                    </div>
                    <div class="contactUs-items">
                        <router-link to="/admission/requirement" class="link" target="_blank">
                            <i class="fas fa-user-plus"></i>New Admission</router-link>
                    </div>

                    <div class="contactUs-items">
                        <router-link to="/careers" target="_blank"><i class="fa fa-graduation-cap"
                                aria-hidden="true"></i>Careers</router-link>
                    </div>

                    <div class="contactUs-items">
                        <router-link to="/developers" class="link" target="_blank"><i
                                class="fa fa-fw fa-users"></i>Developers</router-link>
                    </div>

                    <div class="contactUs-items">
                        <router-link to="/student" class="link" target="_blank"><i
                                class="fa fa-fw fa-user"></i>Student</router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BigFooter',
    data() {
        return {
            show: true
        }
    },
    methods: {
        openApp(param, type) {
            console.warn(param)
            if (type == 'phone') {
                document.location.href = "tel:" + param;
            }
            if (type == 'mail') {
                window.location.href = "mailto:" + param + '?subject=Subject&body=message%20goes%20here';
            }
            if (type == 'map') {
                const a = document.createElement('a')
                a.href = "https://www.google.com/maps/place/Divine+English+Academy,+Radhakishanpura+Sikar/@27.6091207,75.1608197,17z/data=!4m15!1m8!3m7!1s0x396cbb37dc1d8643:0x91151b0cc6679b3d!2sDivine+English+Academy,+Radhakishanpura+Sikar!8m2!3d27.6091207!4d75.1633946!10e1!16s%2Fg%2F11d_1bgdq2!3m5!1s0x396cbb37dc1d8643:0x91151b0cc6679b3d!8m2!3d27.6091207!4d75.1633946!16s%2Fg%2F11d_1bgdq2?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                a.target = '_blank'
                a.click()
            }

        }
    }
}
export function hide() {
    document.getElementById('ftr').style.display = 'none'
}
</script>

<style scoped>
@media(min-width: 1200px) {
    .footer {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 750px;
        background-color: #27739c;
        display: flex;
        bottom: 0;
        flex-direction: column;
        align-items: center;
    }

    .footer h4 {
        color: white;
        font-size: xx-large;
        margin: 1px;
    }

    .footer h5 {
        margin: 0;
        color: white;
        font-size: larger;
        font-weight: lighter;
        line-height: 30px;
    }

    .footer-level-1 {
        display: flex;
    }

    .footer-level-1 p {
        color: white;
        font-size: x-large;
        text-decoration: none;
    }


    .footerHead {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .footerHead a {
        color: white;
        text-decoration: none;
        font-size: x-large;
    }

    .privacyPolicy {
        display: flex;
    }

    .privacyPolicy .bar {
        color: #FF6000;
    }

    .bigfooter-links:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        padding: 2px;

        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .contactUs-items {
        display: flex;
        align-items: baseline;
    }

    .contactUs-items:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        padding: 2px;

        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
}

@media(max-width: 1200px) {
    .footer {
        background-color: #27739c;
        display: grid;
        justify-content: space-around;
        justify-items: center;
        padding: 10px;
        margin-bottom: 90px;
        color: white;
        min-height: 737px;
    }

    .footer h4 {
        color: white;
        font-size: xx-large;
        margin: 1px;
        text-align: center;
        margin-bottom: 0;
        margin-top: 5px;
    }

    .footer h5 {
        text-align: center;
        margin: 0;
        color: white;
        line-height: 15px;
        font-weight: lighter;
        line-height: 30px;
    }

    .copyright {
        text-align: center;
        color: lightgrey;
        margin-bottom: 0;
    }

    .footerHead a {
        color: white;
        text-decoration: none;
        font-size: x-large;
    }

    .privacyPolicy {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .privacyPolicy .bar {
        display: none;
    }
}

i {
    font-size: x-large;
    margin-right: 10px;
}

.logo {
    display: flex;
    align-items: center;
}

.footer fb-logo {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    margin: 20px;
}

.footer insta-logo {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    margin: 20px;
}

a {
    margin-right: 10px;
}

.footer-level-1 h1,
i {
    color: #FF6000;
}

.footer-level-1 a {
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin-top: 25px;
    margin-top: 10px;
}

.i-button {
    cursor: pointer;
}
</style>