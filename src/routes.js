import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Student from './components/Student.vue';
import PageNotFound from './components/PageNotFound.vue';
import StudentProfile from './components/StudentProfile.vue';
import Developers from './components/Developers.vue';
import Careers from './components/Careers.vue';
import JobDescription from './components/JobDescription.vue'
import Admin from './components/Admin/Admin.vue';
import Taskboard from './components/Admin/Taskboard.vue';
import Dashboard from './components/Admin/Dashboard.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';
import TermsConditions from './components/Terms&Conditions.vue';
import RefunPolicy from './components/RefunPolicy.vue';
import ContactUsComp from './components/ContactUsComp.vue';
import JobListingUpdate from './components/Admin/JobListingUpdate.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        beforeEnter: (to, from, next) => {
            const { uri } = to.query;
            if (uri != null && uri != '/') {
                next(false);
                router.push(uri);
            } else {
                next();
            }
        }
    },
    {
        name: 'Careers',
        path: '/careers',
        component: Careers
    },
    {
        name: 'Student',
        path: '/student',
        component: Student
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound

    },
    {
        name: 'StudentProfile',
        path: '/studentprofile',
        component: StudentProfile
    },
    {
        name: 'Developers',
        path: '/developers',
        component: Developers
    },
    {
        name: 'JobDescription',
        path: '/jobdetails/:id',
        component: JobDescription
    },
    {
        name: 'Taskboard',
        path: '/taskboard',
        component: Taskboard
    },
    {
        name: 'Admin',
        path: '/admin',
        component: Admin
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'PrivacyPolicy',
        path: '/privacy-policy',
        component: PrivacyPolicy
    },
    {
        name: 'Terms&Conditions',
        path: '/terms-and-conditions',
        component: TermsConditions
    },
    {
        name: 'RefundPolicy',
        path: '/refund-policy',
        component: RefunPolicy
    },
    {
        name: 'ContactUs',
        path: '/contactus',
        component: ContactUsComp
    },
    {
        name: 'UpdateJobListed',
        path: '/update-job-listed/:jobId',
        component: JobListingUpdate
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;