<script setup>
const fetchUrl = "https://dummyjson.com/recipes";
const recipes = ref([]);

const { status, data: recipesData } = await useFetch(fetchUrl);
recipes.value = recipesData.value.recipes;

// watchEffect(() => {
//     if (recipesData.value) {
//         recipes.value = recipesData.value.recipes
//     }
// })
</script>

<template>
    <client-only>
        <ul>
            <b v-if="status === 'pending'">Loading...</b>
            <li v-for="recipe in recipes" :key="recipe.id">
                <span>{{ recipe.name }}</span>
                <img :src="recipe.image" :alt="recipe.name" />
            </li>
        </ul>
    </client-only>
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
    width: 700px;
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
