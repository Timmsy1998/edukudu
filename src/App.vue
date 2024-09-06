<template>
  <div>
    <ParentComponent />
    <MainView />
  </div>
</template>

<script setup>
import ParentComponent from './components/ParentComponent.vue';
import MainView from './views/MainView.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
