<template>
    <div>
        <h2>Child Component</h2>
        <button @click="toggleBool">Toggle Bool</button>
        <input type="text" v-model="localString" @input="updateString" />
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
    parentData: Object
});

const emit = defineEmits(['toggleBool', 'updateString']);

const localString = ref(props.parentData.stringVar);

watch(() => props.parentData.stringVar, (newVal) => {
    localString.value = newVal;
});

const toggleBool = () => {
    emit('toggleBool');
};

const updateString = () => {
    emit('updateString', localString.value);
};
</script>