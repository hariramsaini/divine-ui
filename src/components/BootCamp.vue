<template>
  <Header></Header>
  <div ref="main">

  </div>
  <div class="subscription-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1>Divine English Academy</h1>
        <h1>Summer Coding Bootcamp 2025</h1>
        <p class="subtitle">Master Full-Stack Development from Grade 5 to 10</p>
        <div class="hero-image">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Coding Bootcamp">
        </div>
      </div>
    </div>

    <div class="pricing-section">
      <div class="pricing-card">
        <div class="pricing-header">
          <h2>Premium Coding Bootcamp</h2>
          <div class="price">₹1000<span class="duration">/whole course</span></div>
          <div class="badge">Best Value</div>
        </div>

        <div class="features">
          <div class="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919854.png" alt="Vue.js" class="tech-icon">
            <span>Vue.js Frontend Development</span>
          </div>
          <div class="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" class="tech-icon">
            <span>Java Backend Programming</span>
          </div>
          <div class="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="MySQL" class="tech-icon">
            <span>MySQL Database Management</span>
          </div>
          <div class="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png" alt="Android" class="tech-icon">
            <span>Android App Development</span>
          </div>
          <div class="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" alt="Projects" class="tech-icon">
            <span>Live Project Experience</span>
          </div>
          <div class="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" alt="Cloud" class="tech-icon">
            <span>Cloud Server Deployment</span>
          </div>
        </div>
        <div v-if="displaySuccessMsg" class="success">
          <h3>You have successfully enrolled for Summer Coding Bootcamp. Please connect further by calling or pinging on
            below contact number.
          </h3>
          <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          ">
            <div style="display: flex;align-items: baseline;">
              <div>
                <h3 style="
                cursor: pointer;
                transition: all 0.3s ease;
                " @click="openApp('+91-9928580651', 'phone')"><i class="fa fa-phone i-button"
                    aria-hidden="true"></i>+91-9928580651</h3>
              </div>
            </div>
            <div class="insta-logo">
              <a href=" https://wa.me/919928580651" target="_blank">
                <img src="../assets/wa-logo.png" alt="" style="width: 70px; border-radius: 100%;">
              </a>
            </div>
          </div>
        </div>
        <div ref="enroll_div" v-else>
          <div class="st-details">
            <input type="text" placeholder="* Full Name" v-model="studentDetails.fullName" ref="fullName">
            <input type="text" placeholder="* Father's Name" v-model="studentDetails.fatherName" ref="fatherName">
            <input type="number" placeholder=" * Contact Number" v-model="studentDetails.mobile" ref="mobile">
            <input type="text" placeholder=" * Enter your Class" v-model="studentDetails.studentClass"
              ref="studentClass">
            <input type="text" placeholder="Enter the Name of Referral" v-model="studentDetails.referral" ref="referral"
              style="width: 80%;">
            <span style="font-size: smaller; color: gray;width: 80%;">Note: Referral person will get 40%
              discount.</span>

            <p>All (*) fields are required!</p>
          </div>

          <button class="subscribe-btn" @click="subscribe">Enroll Now</button>

          <p v-if="displayErrorMsg" style="color: red; font-size: large;">We are really sorry payment not completed
            successfully.</p>
          <p v-if="error.length > 0" class="error"> Focused fields are not valid </p>
        </div>

        <div class="bonus-features">
          <h3>Special Summer Bonuses:</h3>
          <ul>
            <li>🎁 Free eBook: "Coding for Teens"</li>
            <li>👨‍💻 1-on-1 Mentor Sessions</li>
            <li>🏆 Certificate of Completion</li>
            <li>📱 Mobile App for Learning On-the-Go</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="testimonials">
      <h2>What Our Students Say</h2>
      <div class="testimonial-grid">
        <div class="testimonial-card">
          <img src="../assets/students/801.jpg" alt="Student" class="student-img">
          <p>"This bootcamp helped me build my first app, this divine english academy web app build by me and my team."
          </p>
          <div class="student-name">- Sonakshi, Grade 8</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/802.jpg" alt="Student" class="student-img">
          <p>"In this Bootcamp I learnt about the web application development and I have developed Divine English
            Academy Web Application. Thanks to Our School to giving such high-level software engineering training."</p>
          <div class="student-name">- Pratul, Grade 8</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/701.jpg" alt="Student" class="student-img">
          <p>"I myself and my parents we never thought that at this age I would develop web application ever."</p>
          <div class="student-name">- Virat, Grade 7</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/702.jpg" alt="Student" class="student-img">
          <p>"We learnt web application software development in this camp like how the Google and Facebook built. Now
            I'm developing my own Restaurants Management system."</p>
          <div class="student-name">- Mayank, Grade 7</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/601.jpg" alt="Student" class="student-img">
          <p>"This bootcamp helped me build my first app at just 12 years old!"</p>
          <div class="student-name">- Rohit , Grade 6</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/602.jpg" alt="Student" class="student-img">
          <p>"Its really far away from our imagination that we are learning Software Development at early age defenitly we are on a advance track. Thanks alot to our Director Sir who took this awesome step providing us such an awesome chance."</p>
          <div class="student-name">- Gajel, Grade 6</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/503.jpg" alt="Student" class="student-img">
          <p>"This bootcamp helped me build my first app at just 10 years old! Where I build login and profile pages
            like facebook."</p>
          <div class="student-name">- Dev Choudhary, Grade 5</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/501.jpg" alt="Student" class="student-img">
          <p>"At age 9, I have learnt computer fundamental including details knowledge about Frontend, Backend and
            Databses. As a software developer I've learnt the fronend technology Vue Js."</p>
          <div class="student-name">- Kritika , Grade 5</div>
        </div>
        <div class="testimonial-card">
          <img src="../assets/students/502.jpg" alt="Student" class="student-img">
          <p>"I learned more then our parentss expectation as my father said he is very happy that at 9 years age I'm
            learning Software Development in Our School only."</p>
          <div class="student-name">- Kriti , Grade 5</div>
        </div>
      </div>
    </div>

    <Trainer></Trainer>

    <div class="countdown-section" v-if="showCountdown">
      <h3>30 Seats Available Only! Hurryup...</h3>
      <h3>Limited Time Offer!</h3>
      <div class="countdown">
        <div class="countdown-item">
          <span class="countdown-value">{{ days }}</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">{{ hours }}</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">{{ minutes }}</span>
          <span class="countdown-label">Minutes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createOrderTransaction } from '@/services/PaymentsService';
import Header from './Header.vue';
import Trainer from './Trainer.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'BootcampSubscription',
  components: { Header, Trainer },
  data() {
    return {
      showCountdown: true,
      days: 7,
      hours: 23,
      minutes: 45,
      interval: null,

      scriptUrl: "https://checkout.razorpay.com/v1/checkout.js",
      studentDetails: {
        fullName: '',
        fatherName: '',
        mobile: '',
        studentClass: '',
        referral: '',
        amount: 1000,
        currency: 'INR',
        paymentId: null,
        razorPaymentId: '',
        signature: ''
      },
      displayErrorMsg: false,
      displaySuccessMsg: false,
      error: []
    }
  },
  mounted() {
    this.startCountdown();

    const date = new Date()
    console.log(date.getDate())

    this.scrollToTop()
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  setup() {
    useHead({
      //Can be static or computed
      title: `Summer Coding Bootcamp | Divine English Academy Radhakishanpura | Programming Class | Software Engineering Class`,
      meta: [
        {
          name: `description`,
          content: 'India\'s one and only school who is giving Software Engineering Training to the students from grade 5 to 10.',

        },

      ]
    })
  },
  methods: {
    startCountdown() {
      this.interval = setInterval(() => {
        if (this.minutes > 0) {
          this.minutes--;
        } else {
          this.minutes = 59;
          if (this.hours > 0) {
            this.hours--;
          } else {
            this.hours = 23;
            if (this.days > 0) {
              this.days--;
            } else {
              this.showCountdown = false;
              clearInterval(this.interval);
            }
          }
        }
      }, 1000);
    },

    subscribe() {
      const isValidated = this.validateForm()

      if (isValidated) {
        // Implement subscription logic
        alert('Redirecting to payment gateway...');
        // In a real app, you would redirect to payment page
        createOrderTransaction(this.studentDetails).then(res => {
          if (res != null && res.status == 200) {
            console.warn(res)
            this.openPaymentPrompt(res.data.data)
          }
        })
        // this.$router.push('/checkout');
      }
    },

    validateForm() {
      this.error = []

      if (this.error.length == 0) {
        for (let item in this.studentDetails) {
          const element = this.studentDetails[item]

          if ((element == '') && item == 'fullName') {
            this.error.push(item)
            this.$refs.fullName.style.border = '2px solid red'
          }
          if ((element == '') && item == 'fatherName') {
            this.error.push(item)
            this.$refs.fatherName.style.border = '2px solid red'
          }

          if ((element == '' || this.$refs.mobile.value.length < 10) && item == 'mobile') {
            this.error.push(item)
            this.$refs.mobile.style.border = '2px solid red'
          }

          if ((element == '') && item == 'studentClass') {
            this.error.push(item)
            this.$refs.studentClass.style.border = '2px solid red'
          }
        }
      }

      if (this.error.length == 0) {
        return true;
      } else {
        setTimeout(() => {
          this.error = []
          this.clearFieldsStyle()
        }, 5000)
        return false;
      }
    },
    async openPaymentPrompt(order) {
      console.log('async openPaymentPrompt(order) ')
      await this.loadPaymentScript()
      const options = {
        order_id: order.orderId,
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: this.studentDetails.fullName,
        description: 'Payment of boot camp',
        image: "https://pixabay.com/photos/autumn-forest-fall-pathway-leaves-8688876/",
        handler: (response) => {
          this.paymentSuccess(response, order)
        },
        prefill: {
          name: this.studentDetails.fullName,
          email: '',
          contact: this.studentDetails.mobile
        },
        notes: {
          address: "Sikar"
        },
        theme: {
          color: "lightblue"
        }
      }

      const razorpayObj = new window.Razorpay(options);
      razorpayObj.open();
    },

    paymentSuccess(response, order) {
      //route to any where
      console.warn(response)
      if (response.razorpay_payment_id != null || response.razorpay_payment_id != '') {
        this.studentDetails.paymentId = order.paymentId;
        this.studentDetails.razorPaymentId = response.razorpay_payment_id;
        this.studentDetails.signature = response.razorpay_signature
        createOrderTransaction(this.studentDetails).then(res => {
          if (res != null && res.status == 200) {
            console.warn(res)
            if (res.data.data.paymentStatus=="SUCCESS") {
              this.displaySuccessMsg = true
            }
            
          }
        })

      } else {
        this.displayErrorMsg = true
      }
    },

    loadPaymentScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = this.scriptUrl;
        script.onload = () => {
          resolve(true)
        }

        script.onerror = () => {
          reject(new Error("Filed to load Razorpay script"))
        };
        document.body.appendChild(script);
      })
    },

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

    },

    clearFieldsStyle() {
      this.$refs.fullName.style.border = '';
      this.$refs.fatherName.style.border = '';
      this.$refs.mobile.style.border = '';
      this.$refs.studentClass.style.border = '';
    },
    scrollToTop() {
      this.$refs.main.scrollIntoView({ behavior: 'smooth' });
    }
  },

  watch: {
    'studentDetails.fullName': function (currentVal, previousVal) {
      if (String(currentVal).length > 50) {
        this.studentDetails.fullName = previousVal
      }

      const nameRegex = /^[ a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
      if (!nameRegex.test(currentVal) && this.studentDetails.fullName.length > 1) {
        this.studentDetails.fullName = previousVal
      }

      this.$refs.fullName.style.border = ''
    },
    'studentDetails.fatherName': function (currentVal, previousVal) {
      if (String(currentVal).length > 50) {
        this.studentDetails.fatherName = previousVal
      }

      const nameRegex = /^[ a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
      if (!nameRegex.test(currentVal) && this.studentDetails.fatherName.length > 1) {
        this.studentDetails.fatherName = previousVal
      }

      this.$refs.fatherName.style.border = ''
    },

    'studentDetails.studentClass': function (currentVal, previousVal) {
      if (String(currentVal).length > 16) {
        this.studentDetails.studentClass = previousVal
      }

      const nameRegex = /^[ a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
      if (!nameRegex.test(currentVal) && this.studentDetails.studentClass.length > 1) {
        this.studentDetails.studentClass = previousVal
      }
      this.$refs.studentClass.style.border = ''
    },

    'studentDetails.mobile': function (currentVal, previousVal) {
      if (String(currentVal).length > 10) {
        this.studentDetails.mobile = previousVal
      }
      this.$refs.mobile.style.border = ''
    },
  }
}
</script>

<style scoped>
.subscription-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
  margin-top: 80px;
}

.hero-section {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.hero-image img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.pricing-section {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.pricing-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
}

.pricing-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.pricing-header h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 3rem;
  font-weight: bold;
  color: #e52e71;
  margin: 1rem 0;
}

.duration {
  font-size: 1rem;
  color: #7f8c8d;
}

.badge {
  background: #e52e71;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.features {
  margin: 2rem 0;
}

.feature-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #ecf0f1;
}

.tech-icon {
  width: 30px;
  height: 30px;
  margin-right: 1rem;
}

.subscribe-btn {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 1rem 0;
}

.subscribe-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(233, 30, 99, 0.3);
}

.bonus-features {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.bonus-features h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.bonus-features ul {
  list-style-type: none;
  padding: 0;
}

.bonus-features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
}

.testimonials {
  text-align: center;
  margin: 3rem 0;
}

.testimonials h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.testimonial-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.testimonial-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.student-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.student-name {
  font-weight: bold;
  color: #e52e71;
  margin-top: 1rem;
}

.countdown-section {
  text-align: center;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem 0;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e52e71;
}

.countdown-label {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.st-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.st-details input {
  padding: 5px;
  font-size: medium;
  border-radius: 20px;
  border: 1px solid #e5316d;
  margin: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.success p {
  color: #e5316d;
  font-size: larger;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.success h3 {
  color: #0cc672;
  font-size: larger;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.error {
  color: red;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .price {
    font-size: 2.5rem;
  }

  .testimonial-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>