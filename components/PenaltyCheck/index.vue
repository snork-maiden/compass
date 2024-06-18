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
        class="photo"
      />
  </section>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.check {
  display: grid;
  gap: 40px;
  place-items: center;
  margin-bottom: 13px;
  @media screen and (min-width: 600px) {
    grid-template-columns: auto 35vw;
  }
}

.wrapper {
  max-width: 563px;
}

.headline {
  font-size: clamp(1.9em, 4vw, 41px);
  margin-bottom: 0.6em;
}

.photo {
  width: Max(40vw, 300px);
}
</style>
