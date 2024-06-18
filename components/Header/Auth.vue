<template>
    <div class="auth">
        <NuxtLink to="/login" class=" login">Вход</NuxtLink>
        <NuxtLink to="/register" class="button">Регистрация</NuxtLink>
    </div>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.auth {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5em $header-gap;
    padding-top: 2px;
}

.button {
    font-size: 15px;
}
</style>
