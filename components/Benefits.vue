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
  <section class="section">
    <!-- Не стала децентрировать заголовок для пиксель перфекта, потому что это выглядит как ошибка -->
    <h2 class="section-title">
      Плюсы использования сервиса «Компас» для анализа штрафов
    </h2>
    <ul class="benefits">
      <li class="benefit" v-for="benefit of benefitsData" :key="benefit.title">
        <component class="icon" :is="benefit.icon" />
        <div class="wrapper">
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="text">{{ benefit.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
}

.benefit {
  width: 362px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 24px 20px;
  background-color: $card-bg-color;
  border: 1px solid #eeeff1;
  border-radius: 10px;
}

.wrapper {
  max-width: 25em;
}

.benefit-title {
  font-size: 18px;
  color: $accent-text-color;
  align-self: end;
  margin-bottom: 10px;
}

.icon {
  min-width: 57px;
}
</style>
