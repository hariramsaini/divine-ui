<template>
    <div class="footer">
        <h4 class="contact">Contact Detail: +91-9928580651</h4>
        <div class="copyright">
            <p><i class="fa fa-copyright" aria-hidden="true"></i> DivineEnglishAcademy 2025</p>
        </div>
        <div class="logo">
            <div class="fb-logo">
                <a href="https://facebook.com/divinesikar/" target="_blank">
                    <img src="../assets/fb.png" alt="" style="width: 30px;">
                </a>
            </div>
            <div class="insta-logo">
                <a href="https://instagram.com/divineschoolsikar/reels/" target="_blank">
                    <img src="../assets/instagram.svg" alt="" style="width: 40px;">
                </a>
            </div>
            <div class="insta-logo">
                <a href=" https://wa.me/919928580651" target="_blank">
                    <img src="../assets/wa-logo.png" alt="" style="width: 30px; border-radius: 100%;">
                </a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>

<style scoped>
@media(min-width: 1200px) {
    .footer {
        height: 40px;
        background-color: #27739c;
        display: flex;
        align-items: center;
        justify-content: space-between;
        bottom: 0;
    }

    .footer h4 {
        color: white;
        margin-left: 20px;
    }

    .copyright {
        text-align: center;
        color: lightgrey;
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

    .contact {
        display: none;
    }
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