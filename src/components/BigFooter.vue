<template>
    <div class="footer" ref="ftr" id="ftr">
        <div class="footerHead">
            <h4>Divine English Academy</h4>
            <h5>One of Shkahawati's largest educational conglomerates, fostering excellence and shaping success stories
                across
                India since 2014.</h5>
            <div>
                <router-link to="/privacy-policy" class="link" target="_blank">Privacy Policy</router-link>
                <a style="color: #FF6000;">|</a>
                <router-link to="/terms-and-conditions" class="link" target="_blank">Terms & Conditions</router-link>
                <a style="color: #FF6000;">|</a>
                <router-link to="/refund-policy" class="link" target="_blank">Refund Policy</router-link>
            </div>
        </div>
        <div class="footer-level-1">
            <div class="contactUs">
                <h1>Contact Us</h1>

                <div style="display: flex;align-items: baseline;">
                    <i class="fa fa-map-marker" aria-hidden="true"> </i>
                    <div>
                        <p>Radhakishan Pura,</p>
                        <p>Sikar,</p>
                        <p>Rajasthan 332001</p>
                    </div>
                </div>

                <div style="display: flex;align-items: baseline;">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <div>
                        <p>+91-9928580651</p>
                    </div>
                </div>

                <div style="display: flex;align-items: baseline;">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <p>info@divineacademy.link</p>
                </div>
            </div>

            <div class="quickLinks">
                <h1>Quick Links</h1>
                <div style="display: flex; flex-direction: column;">
                    <router-link to="/contactus" class="link" target="_blank"><i class="fa fa-fw fa-users"></i>Contact
                        Us</router-link>
                    <router-link to="/careers" target="_blank"><i class="fa fa-graduation-cap"
                            aria-hidden="true"></i>Careers</router-link>
                    <router-link to="/developers" class="link" target="_blank"><i
                            class="fa fa-fw fa-users"></i>Developers</router-link>
                    <router-link to="/student" class="link" target="_blank"><i
                            class="fa fa-fw fa-user"></i>Student</router-link>
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

    .footer-level-1 h1,
    i {
        color: #FF6000;
    }

    .footer-level-1 p {
        color: white;
        font-size: x-large;
        text-decoration: none;
    }

    .footer-level-1 a {
        color: white;
        font-size: x-large;
        text-decoration: none;
        margin-top: 25px;
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
}

@media(max-width: 1200px) {
    .footer {
        background-color: #27739c;
        display: grid;
        justify-content: space-around;
        justify-items: center;
    }

    .footer h4 {
        text-align: center;
        margin-bottom: 0;
        margin-top: 5px;
    }

    .copyright {
        text-align: center;
        color: lightgrey;
        margin-bottom: 0;
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
</style>