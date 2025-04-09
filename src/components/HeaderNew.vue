<template>
    <header class="header-container">
      <!-- Left Side - Login -->
      <div class="header-login">
        <router-link to="/login" class="login-button">
          <i class="fas fa-sign-in-alt"></i> Login
        </router-link>
      </div>
  
      <!-- Middle - School Name -->
      <div class="header-title">
        <h1 class="school-name">Divine English Academy</h1>
        <p class="school-motto">Empowering Future Leaders</p>
      </div>
  
      <!-- Right Side - Navigation Menu -->
      <nav class="header-nav">
        <ul class="nav-list">
          <!-- Home -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="fas fa-home"></i> Home
            </router-link>
          </li>
  
          <!-- New Admission Dropdown -->
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle">
              <i class="fas fa-user-plus"></i> New Admission <i class="fas fa-chevron-down dropdown-icon"></i>
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/admission/process" class="dropdown-item"><i class="fas fa-clipboard-list"></i> Admission Process</router-link></li>
              <li><router-link to="/admission/requirements" class="dropdown-item"><i class="fas fa-file-alt"></i> Requirements</router-link></li>
              <li><router-link to="/admission/fees" class="dropdown-item"><i class="fas fa-money-bill-wave"></i> Fee Structure</router-link></li>
            </ul>
          </li>
  
          <!-- Coding Bootcamp Dropdown -->
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle">
              <i class="fas fa-laptop-code"></i> Coding Bootcamp <i class="fas fa-chevron-down dropdown-icon"></i>
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/bootcamp/courses" class="dropdown-item"><i class="fas fa-graduation-cap"></i> Courses</router-link></li>
              <li><router-link to="/bootcamp/schedule" class="dropdown-item"><i class="fas fa-calendar-alt"></i> Schedule</router-link></li>
              <li><router-link to="/bootcamp/projects" class="dropdown-item"><i class="fas fa-project-diagram"></i> Student Projects</router-link></li>
            </ul>
          </li>
  
          <!-- Careers -->
          <li class="nav-item">
            <router-link to="/careers" class="nav-link">
              <i class="fas fa-briefcase"></i> Careers
            </router-link>
          </li>
  
          <!-- Students Dropdown -->
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle">
              <i class="fas fa-user-graduate"></i> Students <i class="fas fa-chevron-down dropdown-icon"></i>
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/students/portal" class="dropdown-item"><i class="fas fa-chalkboard"></i> Student Portal</router-link></li>
              <li><router-link to="/students/resources" class="dropdown-item"><i class="fas fa-book"></i> Learning Resources</router-link></li>
              <li><router-link to="/students/achievements" class="dropdown-item"><i class="fas fa-trophy"></i> Achievements</router-link></li>
            </ul>
          </li>
        </ul>
  
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </nav>
  
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }" v-if="isMobileMenuOpen" @click.self="closeMobileMenu">
        <div class="mobile-menu-content">
          <div class="mobile-menu-header">
            <h3>Menu</h3>
            <button @click="closeMobileMenu" class="mobile-menu-close">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <ul class="mobile-nav-list">
            <li @click="closeMobileMenu">
              <router-link to="/" class="mobile-nav-link">
                <i class="fas fa-home"></i> Home
              </router-link>
            </li>
            
            <li>
              <a href="#" class="mobile-nav-link" @click.prevent="toggleDropdown('admission')">
                <i class="fas fa-user-plus"></i> New Admission <i class="fas fa-chevron-down dropdown-icon"></i>
              </a>
              <ul class="mobile-dropdown-menu" v-if="mobileDropdowns.admission">
                <li @click="closeMobileMenu"><router-link to="/admission/process" class="mobile-dropdown-item"><i class="fas fa-clipboard-list"></i> Process</router-link></li>
                <li @click="closeMobileMenu"><router-link to="/admission/requirements" class="mobile-dropdown-item"><i class="fas fa-file-alt"></i> Requirements</router-link></li>
                <li @click="closeMobileMenu"><router-link to="/admission/fees" class="mobile-dropdown-item"><i class="fas fa-money-bill-wave"></i> Fees</router-link></li>
              </ul>
            </li>
            
            <li>
              <a href="#" class="mobile-nav-link" @click.prevent="toggleDropdown('bootcamp')">
                <i class="fas fa-laptop-code"></i> Coding Bootcamp <i class="fas fa-chevron-down dropdown-icon"></i>
              </a>
              <ul class="mobile-dropdown-menu" v-if="mobileDropdowns.bootcamp">
                <li @click="closeMobileMenu"><router-link to="/bootcamp/courses" class="mobile-dropdown-item"><i class="fas fa-graduation-cap"></i> Courses</router-link></li>
                <li @click="closeMobileMenu"><router-link to="/bootcamp/schedule" class="mobile-dropdown-item"><i class="fas fa-calendar-alt"></i> Schedule</router-link></li>
                <li @click="closeMobileMenu"><router-link to="/bootcamp/projects" class="mobile-dropdown-item"><i class="fas fa-project-diagram"></i> Projects</router-link></li>
              </ul>
            </li>
            
            <li @click="closeMobileMenu">
              <router-link to="/careers" class="mobile-nav-link">
                <i class="fas fa-briefcase"></i> Careers
              </router-link>
            </li>
            
            <li>
              <a href="#" class="mobile-nav-link" @click.prevent="toggleDropdown('students')">
                <i class="fas fa-user-graduate"></i> Students <i class="fas fa-chevron-down dropdown-icon"></i>
              </a>
              <ul class="mobile-dropdown-menu" v-if="mobileDropdowns.students">
                <li @click="closeMobileMenu"><router-link to="/students/portal" class="mobile-dropdown-item"><i class="fas fa-chalkboard"></i> Portal</router-link></li>
                <li @click="closeMobileMenu"><router-link to="/students/resources" class="mobile-dropdown-item"><i class="fas fa-book"></i> Resources</router-link></li>
                <li @click="closeMobileMenu"><router-link to="/students/achievements" class="mobile-dropdown-item"><i class="fas fa-trophy"></i> Achievements</router-link></li>
              </ul>
            </li>
            
            <li @click="closeMobileMenu">
              <router-link to="/login" class="mobile-login-button">
                <i class="fas fa-sign-in-alt"></i> Login
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        isMobileMenuOpen: false,
        mobileDropdowns: {
          admission: false,
          bootcamp: false,
          students: false
        }
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
      closeMobileMenu() {
        this.isMobileMenuOpen = false;
        // Close all dropdowns when closing mobile menu
        Object.keys(this.mobileDropdowns).forEach(key => {
          this.mobileDropdowns[key] = false;
        });
      },
      toggleDropdown(dropdownName) {
        this.mobileDropdowns[dropdownName] = !this.mobileDropdowns[dropdownName];
      }
    },
    watch: {
      $route() {
        this.closeMobileMenu();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Base Styles */
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1000;
  }
  
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  /* Login Button Styles */
  .header-login {
    flex: 0 0 auto;
  }
  
  .login-button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .login-button:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .login-button i {
    margin-right: 8px;
  }
  
  /* School Title Styles */
  .header-title {
    flex: 1;
    text-align: center;
    padding: 0 20px;
  }
  
  .school-name {
    font-size: 1.8rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #fff, #f9f9f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .school-motto {
    font-size: 0.9rem;
    margin: 5px 0 0;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  /* Navigation Styles */
  .header-nav {
    flex: 0 0 auto;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  
  .nav-item {
    margin-left: 1.2rem;
    position: relative;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
  }
  
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .nav-link i {
    margin-right: 8px;
    font-size: 0.9rem;
  }
  
  .dropdown-icon {
    margin-left: 5px;
    font-size: 0.7rem;
    transition: transform 0.3s ease;
  }
  
  /* Dropdown Menu Styles */
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    min-width: 220px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 0.5rem 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
    z-index: 100;
  }
  
  .dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .dropdown-item {
    color: #333;
    padding: 0.6rem 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  
  .dropdown-item:hover {
    background-color: #f5f5f5;
    color: #1a2a6c;
    padding-left: 1.2rem;
  }
  
  .dropdown-item i {
    margin-right: 10px;
    color: #b21f1f;
    width: 18px;
    text-align: center;
  }
  
  /* Mobile Menu Toggle */
  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: 1rem;
  }
  
  /* Mobile Menu Styles */
  .mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2000;
  }
  
  .mobile-menu-open {
    display: block;
  }
  
  .mobile-menu-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100%;
    background: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
  
  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #1a2a6c;
    color: white;
  }
  
  .mobile-menu-header h3 {
    margin: 0;
  }
  
  .mobile-menu-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .mobile-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .mobile-nav-link {
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s ease;
  }
  
  .mobile-nav-link:hover {
    background-color: #f9f9f9;
  }
  
  .mobile-nav-link i {
    margin-right: 12px;
    color: #b21f1f;
    width: 20px;
    text-align: center;
  }
  
  .mobile-dropdown-menu {
    list-style: none;
    padding: 0;
    background: #f9f9f9;
  }
  
  .mobile-dropdown-item {
    color: #555;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.8rem 1.5rem 0.8rem 2.5rem;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s ease;
  }
  
  .mobile-dropdown-item:hover {
    background-color: #f0f0f0;
  }
  
  .mobile-dropdown-item i {
    margin-right: 12px;
    color: #fdbb2d;
    width: 20px;
    text-align: center;
  }
  
  .mobile-login-button {
    display: block;
    background: #1a2a6c;
    color: white;
    text-align: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }
  
  .mobile-login-button:hover {
    background: #233380;
  }
  
  /* Responsive Styles */
  @media (max-width: 1024px) {
    .school-name {
      font-size: 1.6rem;
    }
    .nav-item {
      margin-left: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .header-container {
      padding: 0.8rem 1rem;
    }
    
    .header-title {
      order: 1;
      flex: 1;
      text-align: left;
      padding-left: 1rem;
    }
    
    .header-login {
      order: 0;
    }
    
    .header-nav {
      order: 2;
    }
    
    .school-name {
      font-size: 1.4rem;
    }
    
    .school-motto {
      font-size: 0.8rem;
    }
    
    .nav-list {
      display: none;
    }
    
    .mobile-menu-toggle {
      display: block;
    }
  }
  
  @media (max-width: 480px) {
    .school-name {
      font-size: 1.2rem;
    }
    
    .login-button span {
      display: none;
    }
    
    .login-button i {
      margin-right: 0;
    }
  }
  </style>