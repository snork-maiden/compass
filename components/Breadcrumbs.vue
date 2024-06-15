<script lang="ts" setup>
type Step = {
  path: string;
  name: string;
};

defineProps<{
  steps?: Step[];
}>();
</script>
<template>
  <ul class="breadcrumbs">
    <li>
      <NuxtLink to="/" class="login">Главная страница</NuxtLink>
    </li>
    <li v-for="step in steps">
      <NuxtLink :to="step.path" class="login">{{ step.name }}</NuxtLink>
    </li>
  </ul>
</template>
