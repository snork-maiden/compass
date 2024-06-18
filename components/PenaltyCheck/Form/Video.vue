<script setup>
let isModalOpen = ref(false);
</script>

<template>
  <button type="button" class="show-video" @click="isModalOpen = true">
    <IconVideo />
    <span class="btn-text">О сервисе</span>
    <span class="duration">(1 мин. 20 сек)</span>
  </button>

  <Modal v-if="isModalOpen" @close="isModalOpen = false">
    <iframe
      width="960"
      height="523"
      src="https://www.youtube.com/embed/yKQ_sQKBASM?si=V7fnab2-4BQ6GIKv"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </Modal>
</template>
<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.show-video {
  cursor: pointer;
  background: none;
  border: 1px solid $button-bg-color;
  display: flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.55em 1em;
  border-radius: 5px;
}

.duration {
  color: $accent-text-color;
  font-size: 15px;
}
</style>
