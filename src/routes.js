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

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
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
        path: '/jobdetails',
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
        name:'Dashboard',
        path:'/dashboard',
        component:Dashboard
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;