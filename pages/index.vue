<script setup>
import { navigateTo } from "#imports";

// Constants
const inputValue = ref("");
const { $demo } = useNuxtApp();
// Methods
const navigate = () => {
    navigateTo({
        path: `/fruit/${inputValue.value}`,
    });
};
</script>

<template>
    <div id="app">
        <h1>Home Page</h1>
        <span>File: ~/pages/index.vue</span>
        <nav>
            <NuxtLink to="/fruit">Fruit</NuxtLink>
            <NuxtLink to="/Veggie">Veggie</NuxtLink> 
            <NuxtLink to="/fetch">Fetch</NuxtLink> 
            <NuxtLink to="/About">About</NuxtLink> 
        </nav>
        <h2>navigateTo()</h2>
        <p>/fruit/<input type="text" v-model="inputValue" /> <button @click="navigate()">Navigate</button></p>

        <button @click="$demo()">Test Plugins Demo</button>
    </div>
</template>

<style scoped lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
nav {
    background-color: #f0f0f0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: fit-content;
    margin: 10px auto;
    padding: 10px;
}
</style>
