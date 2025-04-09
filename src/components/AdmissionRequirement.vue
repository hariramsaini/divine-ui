<template>
    <Header></Header>
    <div ref="main">

    </div>
    <div class="admission-container">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">Join Our Prestigious School</h1>
                <p class="hero-subtitle">Shaping Future Leaders Since 2010</p>
                <button class="cta-button" @click="routeToAddmission">Apply Now</button>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" alt="Students learning"
                    class="hero-img">
            </div>
        </section>

        <!-- Admission Process Timeline -->
        <section class="timeline-section">
            <h2 class="section-title">Admission Process</h2>
            <div class="timeline">
                <div class="timeline-item" v-for="(step, index) in admissionSteps" :key="index">
                    <div class="timeline-marker">{{ index + 1 }}</div>
                    <div class="timeline-content">
                        <h3>{{ step.title }}</h3>
                        <p>{{ step.description }}</p>
                        <p class="timeline-date" v-if="step.date">{{ step.date }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Requirements Section -->
        <section class="requirements-section">
            <h2 class="section-title">Admission Requirements</h2>
            <div class="requirements-grid">
                <div class="requirement-card" v-for="(req, index) in requirements" :key="index">
                    <div class="card-icon">
                        <i :class="req.icon"></i>
                    </div>
                    <h3>{{ req.title }}</h3>
                    <p>{{ req.description }}</p>
                    <ul v-if="req.items">
                        <li v-for="(item, i) in req.items" :key="i">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Fee Structure -->
        <!-- <section class="fee-section">
            <h2 class="section-title">Fee Structure</h2>
            <div class="fee-tables">
                <div class="fee-table" v-for="(grade, index) in feeStructure" :key="index">
                    <h3>{{ grade.grade }}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in grade.items" :key="i">
                                <td>{{ item.name }}</td>
                                <td>{{ item.amount }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>{{ grade.total }}</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section> -->

        <!-- Application Form -->
        <!-- <section class="form-section" ref="formSection">
            <h2 class="section-title">Application Form</h2>
            <form @submit.prevent="submitApplication" class="admission-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="studentName">Student Full Name</label>
                        <input type="text" id="studentName" v-model="form.studentName" required>
                    </div>
                    <div class="form-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" id="dob" v-model="form.dob" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="grade">Grade Applying For</label>
                        <select id="grade" v-model="form.grade" required>
                            <option value="">Select Grade</option>
                            <option v-for="grade in availableGrades" :value="grade" :key="grade">{{ grade }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <select id="gender" v-model="form.gender" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="parentName">Parent/Guardian Name</label>
                    <input type="text" id="parentName" v-model="form.parentName" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" v-model="form.email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" v-model="form.phone" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="address">Full Address</label>
                    <textarea id="address" v-model="form.address" required></textarea>
                </div>

                <div class="form-group">
                    <label for="previousSchool">Previous School (if any)</label>
                    <input type="text" id="previousSchool" v-model="form.previousSchool">
                </div>

                <div class="form-group file-upload">
                    <label>Required Documents</label>
                    <div class="upload-area" @click="triggerFileInput">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Click to upload documents or drag and drop</p>
                        <input type="file" ref="fileInput" @change="handleFileUpload" multiple style="display: none;">
                    </div>
                    <div class="file-list" v-if="uploadedFiles.length > 0">
                        <div v-for="(file, index) in uploadedFiles" :key="index" class="file-item">
                            <span>{{ file.name }}</span>
                            <button @click="removeFile(index)" class="remove-file">&times;</button>
                        </div>
                    </div>
                </div>

                <div class="form-group checkbox-group">
                    <input type="checkbox" id="agreeTerms" v-model="form.agreeTerms" required>
                    <label for="agreeTerms">I certify that all information provided is accurate and complete</label>
                </div>

                <button type="submit" class="submit-button">Submit Application</button>
            </form>
        </section> -->

        <!-- Success Modal -->
        <div class="modal-overlay" v-if="showSuccessModal">
            <div class="modal-content">
                <i class="fas fa-check-circle success-icon"></i>
                <h3>Application Submitted Successfully!</h3>
                <p>Thank you for applying to our school. We'll review your application and contact you soon.</p>
                <button @click="showSuccessModal = false" class="modal-close">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: 'SchoolAdmission',
    components: {
        Header
    },
    data() {
        return {
            admissionSteps: [
                {
                    title: 'Inquiry',
                    description: 'Submit an inquiry form or visit our campus',
                    date: 'Ongoing'
                },
                {
                    title: 'Application',
                    description: 'Complete and submit the application form with required documents',
                    date: 'Before March 31, 2024'
                },
                {
                    title: 'Assessment',
                    description: 'Student assessment and family interview',
                    date: 'April 1-15, 2024'
                },
                {
                    title: 'Admission Decision',
                    description: 'Notification of admission status',
                    date: 'April 30, 2024'
                },
                {
                    title: 'Enrollment',
                    description: 'Complete enrollment formalities and fee payment',
                    date: 'May 1-15, 2024'
                }
            ],
            requirements: [
                {
                    title: 'Age Requirement',
                    icon: 'fas fa-birthday-cake',
                    description: 'Students must meet the age requirement for the grade they are applying to:',
                    items: [
                        'Pre-K: 3-4 years old',
                        'Kindergarten: 5 years old',
                        'Grade 1: 6 years old by September 1',
                        'Add one year for each subsequent grade'
                    ]
                },
                {
                    title: 'Academic Records',
                    icon: 'fas fa-graduation-cap',
                    description: 'Submit previous school records (if applicable):',
                    items: [
                        'Report cards from previous 2 years',
                        'Standardized test results',
                        'Any IEP or educational evaluation'
                    ]
                },
                {
                    title: 'Health Records',
                    icon: 'fas fa-heartbeat',
                    description: 'Medical forms must be completed by a physician:',
                    items: [
                        'Immunization records',
                        'Physical examination form',
                        'Any special health needs documentation'
                    ]
                },
                {
                    title: 'Recommendations',
                    icon: 'fas fa-user-edit',
                    description: 'Teacher recommendations may be required:',
                    items: [
                        'One academic recommendation',
                        'One character recommendation',
                        'For grades 6-12: Math and English teacher recommendations'
                    ]
                }
            ],
            feeStructure: [
                {
                    grade: 'Pre-K to Grade 5',
                    items: [
                        { name: 'Registration Fee', amount: '$200' },
                        { name: 'Tuition Fee', amount: '$12,000/year' },
                        { name: 'Activity Fee', amount: '$500/year' },
                        { name: 'Technology Fee', amount: '$300/year' }
                    ],
                    total: '$13,000/year'
                },
                {
                    grade: 'Grade 6 to 8',
                    items: [
                        { name: 'Registration Fee', amount: '$250' },
                        { name: 'Tuition Fee', amount: '$14,500/year' },
                        { name: 'Activity Fee', amount: '$600/year' },
                        { name: 'Technology Fee', amount: '$400/year' }
                    ],
                    total: '$15,500/year'
                },
                {
                    grade: 'Grade 9 to 12',
                    items: [
                        { name: 'Registration Fee', amount: '$300' },
                        { name: 'Tuition Fee', amount: '$16,000/year' },
                        { name: 'Activity Fee', amount: '$700/year' },
                        { name: 'Technology Fee', amount: '$500/year' }
                    ],
                    total: '$17,200/year'
                }
            ],
            availableGrades: ['Pre-K', 'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
            form: {
                studentName: '',
                dob: '',
                grade: '',
                gender: '',
                parentName: '',
                email: '',
                phone: '',
                address: '',
                previousSchool: '',
                agreeTerms: false
            },
            uploadedFiles: [],
            showSuccessModal: false
        }
    },
    mounted() {
        this.scrollToTop()
    },
    methods: {
        routeToAddmission() {
            this.$router.push({ name: 'AdmissionProcess' })
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleFileUpload(event) {
            this.uploadedFiles = [...event.target.files];
        },
        removeFile(index) {
            this.uploadedFiles.splice(index, 1);
        },
        submitApplication() {
            // In a real application, you would send this data to your backend
            console.log('Application submitted:', this.form, this.uploadedFiles);
            this.showSuccessModal = true;
            this.resetForm();
        },
        resetForm() {
            this.form = {
                studentName: '',
                dob: '',
                grade: '',
                gender: '',
                parentName: '',
                email: '',
                phone: '',
                address: '',
                previousSchool: '',
                agreeTerms: false
            };
            this.uploadedFiles = [];
        },
        scrollToTop() {
            this.$refs.main.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>

<style scoped>
/* Base Styles */
.admission-container {
    font-family: 'Poppins', sans-serif;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 80px;
}

.section-title {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #2c3e50;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #3498db;
    margin: 10px auto;
    border-radius: 2px;
}

/* Hero Section */
.hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(135deg, #3498db, #2c3e50);
    color: white;
    padding: 3rem;
    border-radius: 10px;
    margin-bottom: 3rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.hero-content {
    flex: 1;
    padding-right: 2rem;
}

.hero-title {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.cta-button {
    background: white;
    color: #2c3e50;
    border: none;
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
    background: #f1f1f1;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.hero-image {
    flex: 1;
}

.hero-img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Timeline Section */
.timeline-section {
    padding: 4rem 0;
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
}

.timeline::before {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #3498db;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
}

.timeline-item {
    padding: 20px 40px;
    position: relative;
    width: 50%;
    box-sizing: border-box;
}

.timeline-item:nth-child(odd) {
    left: 0;
}

.timeline-item:nth-child(even) {
    left: 50%;
}

.timeline-marker {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #3498db;
    color: white;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    font-size: 1.2rem;
    box-shadow: 0 0 0 4px white, 0 4px 10px rgba(0, 0, 0, 0.2);
}

.timeline-item:nth-child(odd) .timeline-marker {
    right: -20px;
}

.timeline-item:nth-child(even) .timeline-marker {
    left: -20px;
}

.timeline-content {
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.timeline-content h3 {
    margin-top: 0;
    color: #3498db;
}

.timeline-date {
    font-style: italic;
    color: #7f8c8d;
    margin-top: 10px;
    font-size: 0.9rem;
}

/* Requirements Section */
.requirements-section {
    background: #f9f9f9;
    padding: 4rem 2rem;
    border-radius: 10px;
    margin-bottom: 3rem;
}

.requirements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.requirement-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.requirement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-icon {
    font-size: 2.5rem;
    color: #3498db;
    margin-bottom: 1rem;
}

.requirement-card h3 {
    color: #2c3e50;
    margin-top: 0;
}

.requirement-card ul {
    padding-left: 20px;
    color: #7f8c8d;
}

.requirement-card li {
    margin-bottom: 8px;
}

/* Fee Section */
.fee-section {
    padding: 4rem 0;
}

.fee-tables {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.fee-table {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.fee-table h3 {
    text-align: center;
    color: #3498db;
    margin-top: 0;
    margin-bottom: 1.5rem;
}

.fee-table table {
    width: 100%;
    border-collapse: collapse;
}

.fee-table th,
.fee-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

.fee-table th {
    background: #f5f5f5;
    font-weight: 600;
}

.fee-table tfoot {
    font-weight: bold;
}

/* Form Section */
.form-section {
    background: #f9f9f9;
    padding: 4rem 2rem;
    border-radius: 10px;
    margin-bottom: 3rem;
}

.admission-form {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-row {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.form-group {
    flex: 1;
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.file-upload {
    margin-top: 2rem;
}

.upload-area {
    border: 2px dashed #ddd;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
}

.upload-area:hover {
    border-color: #3498db;
    background: #f8fafc;
}

.upload-area i {
    font-size: 2.5rem;
    color: #3498db;
    margin-bottom: 1rem;
}

.file-list {
    margin-top: 1rem;
}

.file-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background: #f5f5f5;
    border-radius: 4px;
    margin-bottom: 8px;
}

.remove-file {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0 5px;
}

.checkbox-group {
    display: flex;
    align-items: center;
    margin: 2rem 0;
}

.checkbox-group input {
    width: auto;
    margin-right: 10px;
}

.submit-button {
    background: #3498db;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    font-weight: 600;
}

.submit-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 3rem;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.success-icon {
    font-size: 4rem;
    color: #2ecc71;
    margin-bottom: 1.5rem;
}

.modal-content h3 {
    margin-top: 0;
    color: #2c3e50;
}

.modal-close {
    background: #3498db;
    color: white;
    border: none;
    padding: 12px 25px;
    margin-top: 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
}

.modal-close:hover {
    background: #2980b9;
}

/* Responsive Adjustments */
@media (max-width: 900px) {
    .hero-section {
        flex-direction: column;
        text-align: center;
    }

    .hero-content {
        padding-right: 0;
        margin-bottom: 2rem;
    }

    .timeline::before {
        left: 31px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    .timeline-item:nth-child(even) {
        left: 0;
    }

    .timeline-marker {
        left: 11px !important;
    }
}

@media (max-width: 600px) {
    .form-row {
        flex-direction: column;
        gap: 0;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .hero-title {
        font-size: 2.2rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }
}
</style>