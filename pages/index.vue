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
  max-width: Min(#{$max-width}, 98vw);
  padding: 1em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(2em, 5vh, 85px);
  padding-top: clamp(2.5em, 7vh, 5.3em) ;
}

:deep(.section-title) {
  font-size: clamp(1.7em, 4vw, 34px);
  text-align: center;
  margin-bottom: 1em;
}
</style>
