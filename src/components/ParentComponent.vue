<template>
    <div>
        <h1>Parent Component</h1>
        <p>Boolean Value: {{ parentData.boolVar }}</p>
        <p>String Value: {{ parentData.stringVar }}</p>
        <ChildComponent :parentData="parentData" @toggleBool="toggleBool" @updateString="updateString" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import ChildComponent from './ChildComponent.vue';

const parentData = reactive({
    boolVar: false,
    stringVar: 'Hello'
});

const toggleBool = () => {
    parentData.boolVar = !parentData.boolVar;
};

const updateString = (newString) => {
    parentData.stringVar = newString;
};
</script>