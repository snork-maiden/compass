<template>
  <header class="header">
    <div class="wrapper">
      <NuxtLink to="/" class="logo">
        <IconLogo />
      </NuxtLink>
      <HeaderNavigation />
      <a href="tel: +74951184422" class="phone">
        <IconPhone class="phone-icon"/>
        <span class="phone-text">+7 495 118-44-22</span>
      </a>
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
  padding: 11px;
  font-size: 18px;
}

.logo {
  display: grid;
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

.phone-text {
  @media screen and (max-width: 750px) {
    display: none;
  }
}

  .phone-icon {
    @media screen and (min-width: 751px) {
    display: none;
  }
  
}
</style>
