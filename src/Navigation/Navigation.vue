<template>
    <div>
      <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
      </b-sidebar>
    </div>
  </template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            isSidebarOpen: true,
            menuItems: [
                { id: 1, name: 'Dashboard', route: '/' },
                { id: 2, name: 'Profile', route: '/profile' },
                { id: 3, name: 'Settings', route: '/settings' },
            ],
        };
    },
    methods: {
        toggleSidebar() {
            console.warn('this is navigation')
            this.isSidebarOpen = !this.isSidebarOpen
            console.warn(this.isSidebarOpen)
        }

    }
}
</script>

<style scoped>
@media(max-width: 1200px) {
    .sidebar { 
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .link {
        color: white;
    }
}

@media(min-width: 1200px) {
    .sidebar {
        display: none;
    }
}
</style>