<template>
  <h2 class="title">Документы</h2>
  <Carousel  :items-to-show="3">
    <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
            <h3 class="slide-title">
              <NuxtLink :to="'/documents/' + slide.goto" class="login">{{slide.title}}</NuxtLink>
            </h3>
            <p class="text">{{ slide.text }}</p>
        </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
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
    display: flex;
    flex-direction: column;
}
</style>
