<script setup>
const route = useRoute();
useHead({
    title: route.meta.title,
});
</script>
<template>
  <main :class="route.meta.class">
    <Header/>
    <NuxtPage />
  </main>
</template>
<style scoped lang="scss">
main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
</style>
