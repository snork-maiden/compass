<script setup>
useSeoMeta({
  title: "Compas. Проверка штрафов",
  description: "This is the about page",
});
</script>

<template>
  <main class="main">
    <h1 class="visually-hidden">Сервис для проверки штрафов Компас</h1>
    <PenaltyCheck />
    <Benefits />
    <Documents />
  </main>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.main {
  max-width: $max-width;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6.9em;
  padding-top: 5.3em;
}

:deep(.section-title) {
  font-size: 34px;
  text-align: center;
  margin-bottom: 1em;
}
</style>
