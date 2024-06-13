<template>
  <header class="header">
    <NuxtLink to="/" class="logo">
      <IconLogo />
    </NuxtLink>
    <HeaderNavigation />
    <a href="tel: +74951184422" class="phone"> +7 495 118-44-22</a>
    <HeaderAuth />
  </header>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.header {
  display: flex;
  align-items: center;
  background-color: $header-bg-color;
  color: $invert-text-color;
  padding: 1em;
  gap: 1em;
}

.phone {
  margin-left: auto;
}
</style>
