<script setup>
defineProps({ state: String });
</script>
<template>
    <div class="title">
        <h3>Rendered from Heading.global.vue</h3>
        <!-- Slot mac dinh, khong boc p -->
        <ContentSlot unwrap="p" />
        <!-- Slot duoc dat ten -->
        <ContentSlot :use="$slots.description" />
        <span>Status: {{ state }}</span>
    </div>
</template>

<style lang="scss" scoped>
.title {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px auto;
    h3 {
        color: #1e5799;
    }
    p {
        color: red;
    }
}
</style>
