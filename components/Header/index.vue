<template>
  <header class="header">
    <div class="wrapper">
      <NuxtLink to="/" class="logo">
        <IconLogo />
      </NuxtLink>
      <HeaderNavigation />
      <a href="tel: +74951184422" class="phone"> +7 495 118-44-22</a>
      <HeaderAuth />
    </div>
  </header>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.header {
  background: $header-bg;
  color: $invert-text-color;
  display: grid;
  place-items: center;
  padding: 11px 0;
  font-size: 18px;
}

.wrapper {
  width: 100%;
  max-width: $max-width;
  display: flex;
  align-items: center;
  gap: $header-gap;
}

.phone {
  margin-top: 3px;
  margin-left: auto;
  font-weight: 700;
}
</style>
