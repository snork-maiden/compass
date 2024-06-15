<template>
  <section class="check">
    <div class="wrapper">
      <h2 class="headline">Проверьте штрафы и зарегистрируйтесь в 1 клик</h2>
      <PenaltyCheckForm />
    </div>
    <img
      srcset="
        assets/imgs/index/banner-img.png,
        assets/imgs/index/banner-img-2x.png 2x
      "
      src="assets/imgs/index/banner-img.png"
      alt="Работаем на разных устройствах"
      width="532"
      height="335"
    />
  </section>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.check {
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 40px;
}

.wrapper {
  max-width: 563px;
}

.headline {
font-size: 41px;
margin-bottom: 25px;
}
</style>
