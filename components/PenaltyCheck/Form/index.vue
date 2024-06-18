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
        <IconArrow class="arrow" />
      </button>
      <PenaltyCheckFormVideo />
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
  gap: 16px 30px;
  @media screen and (min-width: 800px) {
    grid-template-columns: 1.5fr 1fr;
  }
}

.registration {
  grid-column: 1/-1;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  font-size: 18px;
  margin-bottom: 0.1em;
}

.submit {
  align-items: center;
  gap: 4px;
  padding: 0.6em 1.1em;

  .arrow {
    padding-top: 3px;
  }
}

.conditions {
  font-size: 13px;
  color: $trinary-text-color;
}
</style>
