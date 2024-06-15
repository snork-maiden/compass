<template>
  <section class="documents">
    <h2 class="section-title">Документы</h2>
    <Carousel :items-to-show="3" wrapAround>
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <h3 class="slide-title">
            <NuxtLink :to="'/documents/' + slide.goto" class="link">
              {{ slide.title }}
            </NuxtLink>
          </h3>
          <p class="text">{{ slide.text }}</p>
          <NuxtLink :to="'/documents/' + slide.goto" class="button">
            Перейти
          </NuxtLink>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>
<script setup>
const slides = [
  {
    title: "Лицензионный договор",
    text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
    goto: "license",
    id: 1,
  },
  {
    title: "Политика обработки персональных данных",
    text: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
    goto: "conditions",
    id: 2,
  },
  {
    title: "Информация об оплате",
    text: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
    goto: "license",
    id: 3,
  },
  {
    title: "Лицензионный договор",
    text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
    goto: "license",
    id: 4,
  },
];
</script>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";
.carousel__item {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 340px;
  height: 450px;
  padding: 25px;
  border: 1px solid $card-border-color;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}

.link {
  color: $accent-text-color;
  font-size: 31px;
}

.button {
  margin-top: auto;
}
</style>
