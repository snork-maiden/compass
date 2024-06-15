<script setup>
defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
<label class="field">
<span class="label"><slot></slot></span>
<input type="text" :name="name" class="input" required>
</label>
</template>

<style scoped lang="scss">
@import "~/assets/scss/variables.scss";
</style>
