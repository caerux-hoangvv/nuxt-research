<script setup>
definePageMeta({
    title: "Iam Fruit Page",
    class: "fruit-page",
});
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
        <ul class="nav_guide">
            <li>Navigate to /fruit/hello for MD NuxtContent demo</li>
            <li>Navigate to /fruit/[any] for NuxtContentEmpty demo</li>
            <li>Navigate to /fruit/apple then navigate to /fruit/banana for middleware demo</li>
        </ul>
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
ul.nav_guide {
    list-style: none
}
</style>
