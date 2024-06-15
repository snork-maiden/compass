<script setup>
const IconBenefitUnlimited = resolveComponent("IconBenefitUnlimited");
const IconBenefitSavings = resolveComponent("IconBenefitSavings");
const IconBenefitSafety = resolveComponent("IconBenefitSafety");
const IconBenefitAlarm = resolveComponent("IconBenefitAlarm");
const IconBenefitCheck = resolveComponent("IconBenefitCheck");
const IconBenefitHistory = resolveComponent("IconBenefitHistory");
const benefitsData = [
  {
    title: "Неограниченый автопарк",
    text: "Можно добавить неограниченное кол-во машин и водителей",
    icon: IconBenefitUnlimited,
  },
  {
    title: "Сокращение затрат до 50%",
    text: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
    icon: IconBenefitSavings,
  },
  {
    title: "Безопасность",
    text: "Данные передаются в зашифрованном виде, они доступны только получателю",
    icon: IconBenefitSafety,
  },
  {
    title: "Уведомление о погашении",
    text: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
    icon: IconBenefitAlarm,
  },
  {
    title: "Квитанция об оплате",
    text: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
    icon: IconBenefitCheck,
  },
  {
    title: "Все история сохраняется по каждой машине",
    text: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
    icon: IconBenefitHistory,
  },
];
</script>

<template>
  <h2 class="title">
    Плюсы использования сервиса «Компас» для анализа штрафов
  </h2>
  <ul class="benefits">
    <li class="benefit" v-for="benefit of benefitsData" :key="benefit.title">
      <h3 class="benefit-title">{{ benefit.title }}</h3>
      <p class="text">{{ benefit.text }}</p>
      <component :is="benefit.icon" />
    </li>
  </ul>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";
</style>
