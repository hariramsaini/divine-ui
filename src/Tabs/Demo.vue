<template>
    <div class="container">
        <tabs>
            <tab title="Home" class="home">
                <input type="text">
                <button>Submit</button>
            </tab>
            <tab title="Tab 2">Hello From Tab 2</tab>
            <tab title="Tab 3">Hello From Tab 3</tab>
            <tab title="Tab 4">Hello From Tab 4</tab>
        </tabs>
    </div>
</template>

<script>
import Tab from './Tab.vue'
import Tabs from './TabWrapper.vue';

export default {
    name: 'DemoComp',
    components: {
        Tab,
        Tabs
    }
}
</script>

<style scoped>
.container {
    width: 100%;
}

.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>