<script setup>
const route = useRoute();
// Meta
definePageMeta({
    middleware: ["auth"],
});
</script>

<template>
    <div id="app">
        <h1>I am {{ route.params.id }}</h1>
        <span>File: ~/pages/Fruit/[id].vue</span>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/fruit/">Fruit</NuxtLink>
        </nav>
        <!-- Content from Markdown file -->
        <div class="content" v-if="route.params.id == 'hello'">
            <ContentDoc path="/hello" />
        </div>
    </div>
</template>

<style scoped>
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
    padding: 10px 20px;
    width: fit-content;
    margin: 10px auto;
}
.content {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    width: 60%;
    margin: 0 auto;
    background-color: #d6dac8;
    padding: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: left;
    h2 {
        padding: 10px 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
        width: fit-content;
        margin: 10px auto;
    }
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #d0d4ba;
        padding: 20px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin: 20px auto;
        width: 500px;
        height: 60vh;
    }
}
</style>
