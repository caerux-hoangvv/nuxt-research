<script setup>
defineProps({
    status: String,
});
</script>
<template>
    <div class="inline">
        <h3>Rendered from Inline.global.vue</h3>
        <span>Status: {{ status }}</span>
    </div>
</template>

<style lang="scss" scoped>
.inline {
    background-color: #d2e8f4;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px auto;
    h3 {
        color: #29723e;
    }
    p {
        color: red;
    }
}
</style>