<template>
    <div class="auth">
        <NuxtLink to="/login" class=" login">Вход</NuxtLink>
        <NuxtLink to="/register" class="button registration">Регистрация</NuxtLink>
    </div>
</template>
<style scoped lang="scss">
.auth {
    display: flex;
    align-items: center;
    gap: 1em;
}
</style>
