<template>
  <form class="form">
    <div class="fields">
      <PenaltyCheckFormField name="number"
        >Номер автомобиля</PenaltyCheckFormField
      >
      <PenaltyCheckFormField name="region">Регион</PenaltyCheckFormField>
      <PenaltyCheckFormField name="registration" class="registration"
        >Свидетельство о регистрации ТС</PenaltyCheckFormField
      >
    </div>

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
    <p class="conditions">
      Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
      персональных данных и принимаете оферту
    </p>
  </form>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";
.form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.fields {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 16px 30px;
}

.registration {
  grid-column: 1/-1;
}

.buttons {
  display: flex;
  gap: 21px;
  font-size: 18px;
}

.show-video {
  background: none;
  border: 1px solid $button-bg-color;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 20px;
  border-radius: 5px;
}

.duration {
color: $accent-text-color;
font-size: 1rem;
}

.button {
  align-items: baseline;
  gap: 4px;
}

.conditions {
font-size: 13px;
color: $trinary-text-color;
}
</style>
