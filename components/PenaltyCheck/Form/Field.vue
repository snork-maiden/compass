<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label class="field">
    <span class="label"><slot></slot></span>
    <input type="text" :name="name" class="input" required />
  </label>
</template>

<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.label {
  font-size: 12px;
}
.input {
  height: 40px;
  border: 1px solid $input-border-color;
  border-radius: 5px;
}
</style>
