<template>
    <div class="wrapper-container">
        <ul class="tab_headers">
            <li v-for="title in tabTitles" :key="title" @click="selectedTitle = title"
                :class="{ selected: title == selectedTitle }">
                {{ title }}
            </li>
        </ul>
        <div class="wrapper-view">
            <slot />
        </div>
    </div>
</template>


<script>
import { provide, ref } from 'vue';

export default {
    name: 'TabWrapperComp',
    setup(props, { slots }) {
        const tabTitles = slots.default().map((tab) => tab.props.title);
        const selectedTitle = ref(tabTitles[0])

        provide('selectedTitle', selectedTitle)
        return {
            tabTitles,
            selectedTitle

        }
    }
}
</script>

<style scoped>
.wrapper-view {
    overflow-y: auto;
    width: 95%;
    /* Enable vertical scrolling */
    max-height: 590px;
}

.wrapper-container ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin-bottom: 10px;
}

.wrapper-container li {
    width: 80px;
    text-align: center;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s all ease-out;
}

.wrapper-container li.selected {
    background-color: #0984e3;
    color: white;
}
</style>