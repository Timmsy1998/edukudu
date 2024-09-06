<template>
    <div>
        <h1>Real-Time LESS Compiler</h1>
        <textarea v-model="htmlCode" placeholder="Enter HTML code"></textarea>
        <textarea v-model="lessCode" placeholder="Enter LESS code"></textarea>
        <div class="preview" v-html="compiledHtml" :style="compiledCss"></div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import less from 'less';

const htmlCode = ref('');
const lessCode = ref('');
const compiledHtml = computed(() => htmlCode.value);

const compiledCss = ref('');

watch(lessCode, (newVal) => {
    less.render(newVal, (e, output) => {
        if (!e) {
            const styleElement = document.createElement('style');
            styleElement.innerHTML = output.css;
            document.head.appendChild(styleElement);
        }
    });
}, { immediate: true });
</script>

<style scoped>
.preview {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
}
</style>