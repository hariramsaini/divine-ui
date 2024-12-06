<template>
    <div class="footer">
        <h4>Contact Detail: +91-7737201905 / 01572272529</h4>
        <div class="copyright">
            <p>Copy Right @DivineEnglishAcademy</p>
        </div>
        <div class="logo">
            <div class="fb-logo">
                <a href="https://www.facebook.com/divinesikar/" target="_blank">
                    <img src="../assets/fb.png" alt="" style="width: 30px;">
                </a>
            </div>
            <div class="insta-logo">
                <a href="https://www.instagram.com/divineschoolsikar/reels/" target="_blank">
                    <img src="../assets/instagram.svg" alt="" style="width: 40px;">
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
        margin: 10px;
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
        margin: 10px;
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