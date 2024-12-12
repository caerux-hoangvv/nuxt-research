<script setup>
import RecipeBlock from "~/components/Fetch/RecipeBlock.vue";
</script>

<template>
    <div>
        <h1>Fetch Page</h1>
        <p>Fetching data from <b>https://dummyjson.com/recipes</b></p>
        <RecipeBlock />
    </div>
</template>

<style scoped lang="scss">
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
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 2px;
    }
}
li {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
}
img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
}
</style>
