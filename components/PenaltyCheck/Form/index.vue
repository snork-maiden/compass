<template>
  <form class="form">
    <PenaltyCheckFormField name="number"
      >Номер автомобиля</PenaltyCheckFormField
    >
    <PenaltyCheckFormField name="region">Регион</PenaltyCheckFormField>
    <PenaltyCheckFormField name="registration"
      >Свидетельство о регистрации ТС</PenaltyCheckFormField
    >

    <div class="buttons">
      <button type="submit" class="submit button">
        Проверить штрафы
        <IconArrow />
      </button>
      <button type="button" class="show-video">
        <IconVideo />
        <span class="btn-text">О сервисе</span>
        <span class="duration">(1 мин. 20 сек)</span>
      </button>
    </div>
  </form>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";
</style>
