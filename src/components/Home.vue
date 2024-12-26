<template>
    <HeaderComp></HeaderComp>
    <div class="main">
        <div style="height: 5px;"></div>
        <div class="left">
            <section class="slider10th" v-show="class10th.array.length>0" v-on:click="getResultImages" v-on:touchend="getResultImages">
                <h1>Results</h1>
                <Slider :data="class10th"></Slider>
            </section>
            <!-- <section class="slider10th" v-on:click="getBenefitsImages" v-on:wheel="getBenefitsImages" v-on:touchend="getBenefitsImages"> -->
            <section class="slider10th"  v-show="specialFacilities.array.length>0" v-on:click="getBenefitsImages" v-on:touchend="getBenefitsImages">
                <h1>Special Benefits</h1>
                <Slider :data="specialFacilities"></Slider>
            </section>
            <section style="text-align: center;">
                <h1>School Campus</h1>
                <img src="../assets/sc01.jpg" alt="">
                <h2>Welcome to Divine English Academy</h2>
                <p>At Divine English Academy, we are committed to providing a nurturing and challenging
                    educational environment that empowers students to reach their full potential. Our dedicated faculty
                    and staff work collaboratively to create a community of learners where each student’s unique talents
                    are recognized and developed.</p>

                <h2>Our Mission</h2>
                <p>Our mission is to inspire a lifelong love of learning and to cultivate critical thinking,
                    creativity, and character in our students. We strive to prepare them for success in a rapidly
                    changing world by fostering an inclusive and supportive atmosphere.</p>

            </section>
            <section style="padding: 20px;">
                <h1>Facilities</h1>
                <section>
                    <h3>Computer Lab</h3>
                    <img src="../assets/sc02.jpeg" alt="">
                    <p>Our cutting-edge computer lab is equipped with the latest technology to ensure our students have
                        access to the tools they need to excel in the digital age.



                    </p>

                    <div class="list">
                        <span>
                            <h3>Software Engineering Grade Computers</h3>
                            Each workstation is loaded with
                            essential software, providing opportunities for coding, graphic design, research, and
                            more.
                        </span>
                        <span>
                            <h3>Hub of Inventions </h3>
                            Our
                            lab is a hub of innovation, where students can explore, create, and collaborate on
                            projects that
                            enhance their learning experience.
                        </span>
                        <span>
                            <h3>Modern Workstations</h3>
                            High-speed computers with updated software.

                            <h3>Tech Support</h3>
                            On-site IT support to assist with any technical issues.
                        </span>
                        <span>
                            <h3>Educational Software</h3>
                            Access to a wide range of software for various subjects, including
                            programming, multimedia design, and research tools.
                        </span>

                        <span>
                            <h3>Safe and Secure Environment</h3>
                            Internet safety protocols are in place to ensure a safe online
                            experience for all students.
                        </span>
                    </div>
                </section>
                <section>
                    <h3>Transportation</h3>
                    <img src="../assets/sc03.jpeg" alt="">
                    <p>We understand the importance of safe and reliable transportation for our students. Divine English
                        Academy
                        offers a comprehensive transportation service to ensure that students arrive at school and
                        return home safely.</p>

                    <div class="list">
                        <span>
                            <h3>Extensive Bus Routes</h3>Our buses cover a wide area to accommodate students from
                            various
                            neighborhoods.
                        </span>
                        <span>
                            <h3>Experienced Drivers</h3>All of our drivers are certified and trained to ensure the
                            highest
                            safety standards.
                        </span>
                        <span>
                            <h3>Safety First</h3>Our buses are regularly inspected and maintained to ensure they meet
                            all
                            safety regulations.
                        </span>
                    </div>
                </section>
                <section>
                    <h3>Playground</h3>
                    <img src="../assets/sc04.jpg" alt="">
                    <p>Our expansive playground is a favourite spot for students to unwind and enjoy some physical
                        activity. We believe that play is an essential part of a child’s development, contributing to
                        their physical health, social skills, and overall well-being.</p>
                    <div class="list">
                        <span>
                            <h3>Age-Appropriate Equipment</h3>Our playground is designed with different age groups in
                            mind,
                            offering safe and fun equipment for all students.
                        </span>
                        <span>
                            <h3>Safe Environment</h3>The playground is regularly inspected to ensure all equipment is in
                            excellent condition and meets safety standards.
                        </span>
                        <span>
                            <h3>Supervised Play</h3>During recess and playtimes, our staff is always on hand to
                            supervise and
                            ensure that students are playing safely.
                        </span>
                        <span>
                            <h3>Green Spaces</h3>Plenty of open areas for students to run, play games, and enjoy the
                            fresh
                            air.
                        </span>
                    </div>
                </section>
            </section>
            <section>
                <h1>School Educational Tour</h1>
                <img src="../assets/sc05.jpg" alt="">
                <p>At Divine English Academy, we believe in the power of experiential learning. Our industrial tours
                    provide
                    students with the unique opportunity to explore real-world industries, gaining insights into how
                    businesses operate and seeing firsthand the application of classroom concepts in the workplace.</p>
            </section>
        </div>
        <div class="middle"></div>
        <div class="right">
            <ContactUs />
        </div>
    </div>
    <div class="right-desk">
        <ContactUs />
    </div>
</template>

<script>
import { getFiles } from '@/services/DmsService';
import ContactUs from './ContactUs.vue';
import HeaderComp from './Header.vue';
import Slider from './Slider.vue';

export default {
    name: 'HomeComp',
    components: {
        HeaderComp,
        ContactUs,
        Slider
    },
    data() {
        return {
            class10th: {
                slideFor: 'student',
                array: []
            },
            specialFacilities: {
                slideFor: 'student',
                array: []
            },
            session: '2023 - 24',
            pageNo: 1,
            pageSize: 2,
            totalRecords: 0,
            totalPages: 1,
            benefitsPageNo: 1,
            benefitsTotalRecords: 0,
            benefitsTotalPages: 1
        }
    },
    beforeMount() {
        this.reload()
    },
    methods: {
        reload() {
            this.getResultImages()
        },
        getResultImages() {
            const req = {
                "pageNo": this.pageNo,
                "pageSize": this.pageSize,
                "totalRecords": this.totalRecords,
                "request": { "screen": "Home", "section": "10th" }
            }
            if (this.class10th.array.length == 0 || this.class10th.array.length < this.totalRecords) {
                getFiles(req).then(res => {
                    if (res.status == 200) {
                        const data = res.data.data
                        for (let index = 0; index < data.length; index++) {
                            this.class10th.array.push(data[index])
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

                this.getBenefitsImages()
            }
        },
        getBenefitsImages() {
            const req = {
                "pageNo": this.benefitsPageNo,
                "pageSize": this.pageSize,
                "totalRecords": this.benefitsTotalRecords,
                "request": { "screen": "Home", "section": "Special Facilities" }
            }
            if (this.specialFacilities.array.length == 0 || this.specialFacilities.array.length < this.benefitsTotalRecords) {
                getFiles(req).then(res => {
                    if (res.status == 200) {
                        const data = res.data.data
                        for (let index = 0; index < data.length; index++) {
                            this.specialFacilities.array.push(data[index])
                        }

                        this.benefitsTotalRecords = res.data.totalRecords
                        this.benefitsTotalPages = res.data.pageCounts
                        //console.warn("Response:  " + JSON.stringify(res.data))
                    } else {
                        console.warn(JSON.stringify(res.data))
                    }
                }).catch(error => {
                    console.error(error);

                })
            }

            if (this.benefitsPageNo < this.benefitsTotalPages || this.benefitsPageNo == 1) {
                this.benefitsPageNo++;
            }
        }
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
    width: 50%;
}

.menu a {
    margin-right: 10px;
    text-decoration: none;
}

.logo {
    margin-left: 10px;
    width: 50%;
}

@media(max-width: 1200px) {
    .right-desk {
        display: none;
    }

    .right {
        display: block;
        width: 100%;
    }

    .main {
        margin-top: 100px;
        margin-bottom: 110px;
        width: 100%;
    }

    .list {
        display: flex;
        flex-direction: column;
    }

}

@media(min-width: 1200px) {
    .right {
        display: none
    }

    .main {
        margin-top: 90px;
        width: 100%;
        padding-bottom: 50px;
    }

    .left {
        text-align: center;
        width: 70%;
    }

    .right-desk {
        margin-top: 100px;
        width: 25%;
        position: fixed;
        padding: 30px;
    }

    .list {
        display: flex;
    }

    .list span {
        width: 33%;
    }
}

.left img {
    width: 80%;
    border-radius: 10px;
}

.left h1 {
    color: #3F51B5;
    font-size: xx-large;
    margin: 2px;
}

.left h3,
h2 {
    color: #3F51B5;
}

.left section {
    border: 1px solid paleturquoise;
    border-radius: 10px;
    margin-bottom: 30px;
}

.left p {
    width: 90%;
    display: -webkit-inline-box;
    font-size: larger;
    text-align: justify;
}

.middle {
    width: 1%;
}

.slider10th {
    padding: 10px;
}

.slider10th h1 {
    padding-left: 10px;
    padding-right: 10px;
}

.list span {
    border: 2px solid lightblue;
    border-radius: 20px;
    padding: 10px;
    background-color: lightblue;
    margin: 10px;
}

.list span h3 {
    color: #3F51B5;
    margin: 0;
}
</style>