<template>
    <div class="trainer-profile">
        <div class="profile-header">
            <h2 class="section-title">Our Trainer and HOD</h2>
            <div class="header-decoration">
                <span class="decoration-circle"></span>
                <span class="decoration-line"></span>
                <span class="decoration-circle"></span>
            </div>
        </div>

        <div class="linkedin-card">
            <div class="profile-banner">
                <div class="banner-image"></div>
                <div class="profile-picture">
                    <img :src="require(`@/assets/trainer/${profileData.imageUrl}`)" alt="Profile Picture"
                        class="profile-img">
                </div>
            </div>

            <div class="profile-content">
                <h3 class="profile-name">{{ profileData.name }}</h3>
                <p class="profile-title">{{ profileData.title }}</p>
                <p class="profile-school">{{ profileData.school }}</p>

                <div class="profile-stats">
                    <div class="stat-item">
                        <i class="fas fa-users"></i>
                        <span>{{ profileData.connections }}+ Connections</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-globe"></i>
                        <span>{{ profileData.location }}</span>
                    </div>
                </div>

                <p class="profile-bio">{{ profileData.bio }}</p>

                <div class="linkedin-badge">
                    <a :href="profileData.profileUrl" target="_blank" class="linkedin-btn">
                        <i class="fab fa-linkedin"></i> View LinkedIn Profile
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrainerProfile',
    data() {
        return {
            profileData: {
                name: "Hari Ram Saini",
                title: "Ex. Engineering Manager",
                school: "Jocata Financial Advisory & Technology Hyderabad",
                imageUrl: "hari01.jpeg", // Replace with actual image
                connections: "409",
                location: "Hyderabad, INDIA",
                bio: "Web Application Development, Training specialist and Project Management with 11+ years of experience. Also having 2+ years experience in curriculum development and teacher training. Passionate about innovative teaching methodologies and student success.",
                profileUrl: "https://linkedin.com/in/hari-ram-saini-6487b163" // Replace with actual LinkedIn URL
            }
        }
    }
}
</script>

<style scoped>
.trainer-profile {
    max-width: 800px;
    margin: 2rem auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section-title {
    text-align: center;
    color: #2c3e50;
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    position: relative;
}

.header-decoration {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
}

.decoration-circle {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #0077b5;
    border-radius: 50%;
}

.decoration-line {
    display: inline-block;
    width: 80px;
    height: 2px;
    background-color: #0077b5;
    margin: 0 10px;
}

.linkedin-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.linkedin-card:hover {
    transform: translateY(-5px);
}

.profile-banner {
    position: relative;
    height: 120px;
    background: linear-gradient(135deg, #0077b5, #00a0dc);
}

.profile-picture {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid white;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-content {
    padding: 70px 30px 30px;
    text-align: center;
}

.profile-name {
    color: #2c3e50;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

.profile-title {
    color: #0077b5;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
}

.profile-school {
    color: #7f8c8d;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.profile-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 1.5rem 0;
}

.stat-item {
    display: flex;
    align-items: center;
    color: #34495e;
    font-size: 0.9rem;
}

.stat-item i {
    margin-right: 8px;
    color: #0077b5;
}

.profile-bio {
    color: #34495e;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 0.95rem;
}

.linkedin-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #0077b5;
    color: white;
    padding: 12px 25px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
}

.linkedin-btn:hover {
    background-color: #005f8c;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 119, 181, 0.4);
}

.linkedin-btn i {
    margin-right: 8px;
    font-size: 1.2rem;
}

/* Font Awesome icons - make sure to include this in your project */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

/* Responsive adjustments */
@media (max-width: 768px) {
    .profile-stats {
        flex-direction: column;
        gap: 1rem;
    }

    .profile-name {
        font-size: 1.5rem;
    }
}
</style>