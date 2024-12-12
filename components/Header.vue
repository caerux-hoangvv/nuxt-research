<template>
  <header>
    <NuxtLink to="/">
      <h1>Nuxt Demo</h1>
    </NuxtLink>
    <nav>
      <NuxtLink to="/fruit">Fruit</NuxtLink>
      <NuxtLink to="/veggie">Veggie</NuxtLink>
      <NuxtLink to="/fetch">Fetch</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  border-radius: 15px;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  color: #666;
}
</style>
