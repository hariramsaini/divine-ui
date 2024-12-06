<template>
    <div class="tab-container" v-show="title == selectedTitle">
        <slot />
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: 'TabComp',
    props: ['title'],
    setup() {
        const selectedTitle = inject('selectedTitle')

        return {
            selectedTitle
        }
    }
}
</script>

<style scoped>
.tab-container{
    border: 1px solid #ddd;
}

</style>