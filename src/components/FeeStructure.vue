<template>
    <Header></Header>
    <div ref="main">

    </div>
    <div class="fee-structure-container">
        <div class="header-section">
            <h1 class="school-name">Divine English Academy</h1>
            <h2 class="page-title">Admission Fee Structure 2025-2026</h2>
            <p class="welcome-message">
                Welcome to our prestigious institution! Below you'll find our transparent
                and competitive fee structure designed to provide quality education for all.
            </p>
        </div>

        <div class="fee-tables-container">
            <!-- Main Fee Table -->
            <div class="fee-table main-fees">
                <div class="table-header">
                    <h3>Annual Fee Structure</h3>
                    <span class="academic-year">Academic Year 2024-2025</span>
                </div>
                <div class="table-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Grade</th>
                                <th>1st Installment at the time of admission</th>
                                <th>2nd Installment Due Date - 01-09-2025</th>
                                <th>3rd Installment Due Date - 01-11-2025</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(fee, index) in feeStructure" :key="index"
                                :class="{ highlight: index % 2 === 0 }">
                                <td>{{ fee.grade }}</td>
                                <td>{{ formatCurrency(fee.admission) }}</td>
                                <td>{{ formatCurrency(fee.tuition) }}</td>
                                <td>{{ formatCurrency(fee.activity) }}</td>
                                <td class="total-cell">{{ formatCurrency(fee.total) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Additional Charges -->
            <div class="fee-table additional-charges">
                <div class="table-header">
                    <h3>Additional Charges (One-Time)</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(charge, index) in additionalCharges" :key="'charge-' + index">
                            <td>{{ charge.item }}</td>
                            <td>{{ formatCurrency(charge.amount) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Discounts and Offers -->
        <div class="discounts-section">
            <h3 class="discounts-title">Special Offers & Discounts</h3>
            <div class="discount-cards">
                <div class="discount-card" v-for="(offer, index) in specialOffers" :key="'offer-' + index">
                    <div class="offer-badge" :style="{ backgroundColor: offer.color }">
                        {{ offer.badge }}
                    </div>
                    <h4>{{ offer.title }}</h4>
                    <p>{{ offer.description }}</p>
                    <div class="discount-value">{{ offer.discount }}</div>
                </div>
            </div>
        </div>

        <!-- Payment Information -->
        <!-- <div class="payment-info">
            <h3>Payment Information</h3>
            <div class="payment-methods">
                <div class="method" v-for="(method, index) in paymentMethods" :key="'method-' + index">
                    <i :class="method.icon"></i>
                    <span>{{ method.name }}</span>
                </div>
            </div>
            <div class="installment-plan">
                <h4>Installment Plan Available</h4>
                <p>Pay in 3 installments with 0% interest. First installment due at admission.</p>
            </div>
        </div> -->

        <!-- Call to Action -->
        <div class="cta-section">
            <button class="cta-button" @click="showAdmissionForm">
                <i class="fas fa-edit"></i> Apply Now
            </button>
            <!-- <button class="secondary-button" @click="downloadBrochure">
                <i class="fas fa-download"></i> Download Full Brochure
            </button> -->
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: 'FeeStructure',
    components: {
        Header
    },
    data() {
        return {
            feeStructure: [
                { grade: 'L.K.G.', admission: 5000, tuition: 5000, activity: 5000, total: 15000 },
                { grade: 'U.K.G.', admission: 6000, tuition: 5000, activity: 5000, total: 16000 },
                { grade: 'PREP.', admission: 6000, tuition: 6000, activity: 5000, total: 17000 },
                { grade: 'Grade 1', admission: 6000, tuition: 6000, activity: 6000, total: 18000 },
                { grade: 'Grade 2', admission: 7000, tuition: 6000, activity: 6000, total: 19000 },
                { grade: 'Grade 3', admission: 8000, tuition: 6000, activity: 6000, total: 20000 },
                { grade: 'Grade 4', admission: 9000, tuition: 6000, activity: 6000, total: 21000 },
                { grade: 'Grade 5', admission: 10000, tuition: 7000, activity: 5000, total: 22000 },
                { grade: 'Grade 6', admission: 10000, tuition: 9000, activity: 5000, total: 24000 },
                { grade: 'Grade 7', admission: 10000, tuition: 10000, activity: 5000, total: 25000 },
                { grade: 'Grade 8', admission: 10000, tuition: 10000, activity: 10000, total: 30000 },
                { grade: 'Grade 9', admission: 15000, tuition: 12000, activity: 9000, total: 36000 },
                { grade: 'Grade 10', admission: 15000, tuition: 15000, activity: 10000, total: 40000 },
            ],
            additionalCharges: [
                { item: 'Registration Fee', amount: 1500 },
                { item: 'Uniform Set', amount: 2500 },
                { item: 'Books & Stationery', amount: 2500 },
                { item: 'ID Card & Smart Tag', amount: 500 },
            ],
            specialOffers: [
                {
                    badge: 'SIBLING',
                    title: 'Sibling Discount',
                    description: 'For families with multiple children enrolled',
                    discount: '10% OFF on tuition',
                    color: '#4CAF50'
                },
                {
                    badge: 'EARLY',
                    title: 'Early Bird Offer',
                    description: 'Admissions completed before June 15',
                    discount: '10% OFF total fees',
                    color: '#2196F3'
                },
                {
                    badge: 'ACHIEVER',
                    title: 'Merit Scholarship',
                    description: 'For students with outstanding academic records',
                    discount: 'Up to 25% OFF',
                    color: '#FF9800'
                },
            ],
            paymentMethods: [
                { name: 'Credit/Debit Card', icon: 'fas fa-credit-card' },
                { name: 'Bank Transfer', icon: 'fas fa-university' },
                { name: 'PayPal', icon: 'fab fa-paypal' },
                { name: 'Cheque', icon: 'fas fa-money-check-alt' },
            ]
        }
    },
    mounted() {
        this.scrollToTop()
    },
    methods: {
        formatCurrency(value) {
            return '₹' + value.toLocaleString('en-IN');
        },
        showAdmissionForm() {
            this.$router.push({ name: 'AdmissionProcess' })
        },
        downloadBrochure() {
            alert('Brochure download will start');
            // In a real app, you would trigger a file download
        },
        scrollToTop() {
            this.$refs.main.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.fee-structure-container {
    font-family: 'Poppins', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f9f9f9;
    margin-top: 80px;
}

.header-section {
    text-align: center;
    margin-bottom: 40px;
    padding: 30px;
    background: linear-gradient(135deg, #1e5799 0%, #207cca 51%, #2989d8 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.school-name {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.page-title {
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: 600;
}

.welcome-message {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

.fee-tables-container {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.fee-table {
    flex: 1;
    min-width: 300px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.table-header {
    padding: 15px 20px;
    background: linear-gradient(135deg, #2989d8 0%, #207cca 51%, #1e5799 100%);
    color: white;
}

.table-header h3 {
    margin: 0;
    font-size: 1.3rem;
}

.academic-year {
    font-size: 0.9rem;
    opacity: 0.9;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

th {
    background-color: #f5f5f5;
    font-weight: 600;
}

tr.highlight {
    background-color: #f9f9f9;
}

.total-cell {
    font-weight: 600;
    color: #1e5799;
}

.additional-charges .table-header {
    background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
}

.discounts-section {
    margin-bottom: 40px;
}

.discounts-title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
    position: relative;
}

.discounts-title::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #4CAF50, #2196F3);
    margin: 10px auto;
}

.discount-cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.discount-card {
    flex: 1;
    min-width: 250px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
}

.discount-card:hover {
    transform: translateY(-5px);
}

.offer-badge {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 15px;
    border-bottom-left-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
}

.discount-card h4 {
    margin-top: 10px;
    color: #333;
}

.discount-card p {
    font-size: 0.9rem;
    color: #666;
    margin: 10px 0;
}

.discount-value {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1e5799;
    margin-top: 10px;
}

.payment-info {
    background: white;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 40px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.payment-info h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.payment-methods {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.method {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
}

.method i {
    font-size: 1.5rem;
    color: #2989d8;
}

.installment-plan {
    text-align: center;
    background: #f5f9ff;
    padding: 15px;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
}

.installment-plan h4 {
    margin-top: 0;
    color: #1e5799;
}

.cta-section {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.cta-button,
.secondary-button {
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
}

.cta-button {
    background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
    color: white;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
}

.secondary-button {
    background: white;
    color: #2989d8;
    border: 2px solid #2989d8;
}

.secondary-button:hover {
    background: #f5f9ff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(41, 137, 216, 0.2);
}

@media (max-width: 768px) {
    .fee-tables-container {
        flex-direction: column;
    }

    .table-div {
        max-width: 370px;
        overflow: auto;
    }

    .school-name {
        font-size: 2rem;
    }

    .page-title {
        font-size: 1.5rem;
    }
}
</style>