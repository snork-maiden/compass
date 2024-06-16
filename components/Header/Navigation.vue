<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <NuxtLink to="/rates" class="nav-link">Тарифы</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/contacts" class="nav-link">Контакты</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.nav-list {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em $header-gap;
}
</style>
