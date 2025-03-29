<template>
    <Header></Header>
    <div class="admission-page">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1>Admissions Open for 2025-26</h1>
          <p>Give your child the gift of excellence at Divine English Academy, Sikar</p>
          <button @click="scrollToForm" class="cta-button">Apply Now</button>
        </div>
      </div>
  
      <!-- Admission Form -->
      <div class="form-container" ref="admissionForm">
        <div class="form-header">
          <h2>Admission Application Form</h2>
          <div class="progress-bar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
  
        <form @submit.prevent="submitForm">
          <!-- Step 1: Student Information -->
          <div v-show="currentStep === 1" class="form-step">
            <h3>Student Details</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Full Name*</label>
                <input type="text" v-model="form.studentName" required placeholder="Enter student's full name">
              </div>
              
              <div class="form-group">
                <label>Date of Birth*</label>
                <input type="date" v-model="form.dob" required>
              </div>
              
              <div class="form-group">
                <label>Gender*</label>
                <select v-model="form.gender" required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>Applying for Grade*</label>
                <select v-model="form.grade" required>
                  <option value="">Select Grade</option>
                  <option v-for="grade in grades" :value="grade" :key="grade">{{ grade }}</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- Step 2: Parent Information -->
          <div v-show="currentStep === 2" class="form-step">
            <h3>Parent/Guardian Details</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Father's Name*</label>
                <input type="text" v-model="form.fatherName" required placeholder="Enter father's name">
              </div>
              
              <div class="form-group">
                <label>Mother's Name*</label>
                <input type="text" v-model="form.motherName" required placeholder="Enter mother's name">
              </div>
              
              <div class="form-group">
                <label>Contact Number*</label>
                <input type="tel" v-model="form.contactNumber" required placeholder="Enter mobile number">
              </div>
              
              <div class="form-group">
                <label>Email*</label>
                <input type="email" v-model="form.email" required placeholder="Enter email address">
              </div>
              
              <div class="form-group full-width">
                <label>Address*</label>
                <textarea v-model="form.address" required placeholder="Enter complete address"></textarea>
              </div>
            </div>
          </div>
  
          <!-- Step 3: Additional Information -->
          <div v-show="currentStep === 3" class="form-step">
            <h3>Additional Information</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Previous School (if any)</label>
                <input type="text" v-model="form.previousSchool" placeholder="Name of previous school">
              </div>
              
              <div class="form-group">
                <label>Transportation Required?</label>
                <select v-model="form.transportationRequired">
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              
              <div class="form-group full-width">
                <label>Special Needs/Comments</label>
                <textarea v-model="form.specialNeeds" placeholder="Any special requirements or comments"></textarea>
              </div>
              
              <div class="form-group full-width">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.termsAccepted" required>
                  I agree to the <a href="/terms" target="_blank">Terms & Conditions</a> and confirm that all information provided is accurate*
                </label>
              </div>
            </div>
          </div>
  
          <!-- Navigation Buttons -->
          <div class="form-navigation">
            <button 
              type="button" 
              @click="prevStep" 
              v-if="currentStep > 1" 
              class="nav-button prev-button"
            >
              Previous
            </button>
            
            <button 
              type="button" 
              @click="nextStep" 
              v-if="currentStep < totalSteps" 
              class="nav-button next-button"
            >
              Next
            </button>
            
            <button 
              type="submit" 
              v-if="currentStep === totalSteps" 
              class="submit-button"
              :disabled="!form.termsAccepted"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
  
      <!-- Confirmation Modal -->
      <div v-if="showConfirmation" class="modal-overlay">
        <div class="confirmation-modal">
          <div class="modal-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3>Application Submitted Successfully!</h3>
          <p>Thank you for applying to Divine English Academy. We've sent a confirmation to {{ form.email }}.</p>
          <p>Our admission team will contact you within 3 working days.</p>
          <button @click="resetForm" class="modal-button">Close</button>
        </div>
      </div>
  
      <!-- School Info Section -->
      <div class="info-section">
        <div class="info-card">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
          </div>
          <h4>Why Choose Us?</h4>
          <ul>
            <li>CBSE-affiliated curriculum</li>
            <li>Experienced faculty</li>
            <li>Smart classrooms</li>
            <li>Holistic development</li>
          </ul>
        </div>
        
        <div class="info-card">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/></svg>
          </div>
          <h4>Admission Process</h4>
          <ol>
            <li>Submit this application</li>
            <li>Entrance assessment</li>
            <li>Parent interview</li>
            <li>Admission confirmation</li>
          </ol>
        </div>
        
        <div class="info-card">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </div>
          <h4>Contact Us</h4>
          <p>Email: admissions@divineacademy.link</p>
          <p>Phone: +91 9928580651</p>
          <p>Address: Radhakishanpura Sikar, Rajasthan</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Header from './Header.vue'

  export default {
    name: 'AdmissionPage',
    components:{
        Header
    },
    data() {
      return {
        currentStep: 1,
        totalSteps: 3,
        showConfirmation: false,
        grades: ['Nursery', 'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
        form: {
          studentName: '',
          dob: '',
          gender: '',
          grade: '',
          fatherName: '',
          motherName: '',
          contactNumber: '',
          email: '',
          address: '',
          previousSchool: '',
          transportationRequired: '',
          specialNeeds: '',
          termsAccepted: false
        }
      }
    },
    computed: {
      progress() {
        return (this.currentStep / this.totalSteps) * 100
      }
    },
    methods: {
      nextStep() {
        if (this.currentStep < this.totalSteps) {
          this.currentStep++
        }
      },
      prevStep() {
        if (this.currentStep > 1) {
          this.currentStep--
        }
      },
      scrollToForm() {
        this.$refs.admissionForm.scrollIntoView({ behavior: 'smooth' })
      },
      submitForm() {
        // Here you would typically send the data to your backend
        console.log('Form submitted:', this.form)
        this.showConfirmation = true
      },
      resetForm() {
        this.form = {
          studentName: '',
          dob: '',
          gender: '',
          grade: '',
          fatherName: '',
          motherName: '',
          contactNumber: '',
          email: '',
          address: '',
          previousSchool: '',
          transportationRequired: '',
          specialNeeds: '',
          termsAccepted: false
        }
        this.currentStep = 1
        this.showConfirmation = false
      }
    }
  }
  </script>
  
  <style scoped>
  .admission-page {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    margin-top: 50px;
  }
  
  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, #1e5799 0%, #207cca 100%);
    color: white;
    padding: 80px 20px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 40px;
    background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  .hero-section p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .cta-button {
    background-color: #ff6b00;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #e05d00;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* Form Container */
  .form-container {
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 40px;
  }
  
  .form-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .form-header h2 {
    color: #1e5799;
    margin-bottom: 15px;
  }
  
  .progress-bar {
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    margin: 0 auto;
    max-width: 500px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background: linear-gradient(90deg, #1e5799, #207cca);
    transition: width 0.3s ease;
  }
  
  /* Form Steps */
  .form-step h3 {
    color: #1e5799;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group.full-width {
    grid-column: 1 / -1;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #555;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  input:focus, select:focus, textarea:focus {
    border-color: #1e5799;
    box-shadow: 0 0 0 3px rgba(30, 87, 153, 0.1);
    outline: none;
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    font-weight: normal;
  }
  
  .checkbox-label input {
    width: auto;
    margin-right: 10px;
  }
  
  /* Navigation Buttons */
  .form-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .nav-button, .submit-button {
    padding: 12px 25px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .prev-button {
    background: #f5f5f5;
    color: #555;
    border: 1px solid #ddd;
  }
  
  .prev-button:hover {
    background: #e0e0e0;
  }
  
  .next-button, .submit-button {
    background: #1e5799;
    color: white;
    border: none;
  }
  
  .next-button:hover, .submit-button:hover {
    background: #16467e;
    transform: translateY(-2px);
  }
  
  .submit-button:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
  
  /* Confirmation Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .confirmation-modal {
    background: white;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 90%;
  }
  
  .modal-icon svg {
    width: 60px;
    height: 60px;
    fill: #4CAF50;
    margin-bottom: 20px;
  }
  
  .confirmation-modal h3 {
    color: #1e5799;
    margin-bottom: 15px;
  }
  
  .confirmation-modal p {
    margin-bottom: 10px;
    color: #555;
  }
  
  .modal-button {
    background: #1e5799;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 6px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .modal-button:hover {
    background: #16467e;
  }
  
  /* Info Section */
  .info-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }
  
  .info-card {
    background: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  
  .info-card:hover {
    transform: translateY(-5px);
  }
  
  .info-icon svg {
    width: 40px;
    height: 40px;
    fill: #1e5799;
    margin-bottom: 20px;
  }
  
  .info-card h4 {
    color: #1e5799;
    margin-bottom: 15px;
  }
  
  .info-card ul, .info-card ol {
    padding-left: 20px;
  }
  
  .info-card li {
    margin-bottom: 8px;
    color: #555;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
    }
    
    .hero-section h1 {
      font-size: 2rem;
    }
    
    .hero-section p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .form-container {
      padding: 20px;
    }
    
    .form-navigation {
      flex-direction: column;
    }
    
    .nav-button, .submit-button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  </style>