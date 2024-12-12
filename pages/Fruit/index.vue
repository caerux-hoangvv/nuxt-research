<script setup>
definePageMeta({
    title: "Iam Fruit Page",
    class: "fruit-page",
});
</script>
<template>
    <div id="app">
        <h1>Fruit Page</h1>
        <span>File: ~/pages/Fruit/index.vue</span>
        <!-- Chi render tren client -->
        <client-only>
            <h2>This text is rendered only on Client</h2>
        </client-only>
        <!-- Duoc render tu server-side -->
        <NuxtIsland name="DemoSSR" />
        <h2>navigateTo()</h2>
        <p>/fruit/<input type="text" v-model="inputValue" /> <button @click="navigate()">Navigate</button></p>
    </div>
</template>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
h2 {
    color: seagreen;
}
</style>
