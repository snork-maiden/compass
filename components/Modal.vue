<script setup>
defineEmits({
  close: null,
});
</script>

<template>
  <Teleport to="body">
    <div @click.self="$emit('close')" class="modal-overlay">
      <div class="modal-container">
        <button @click="$emit('close')" class="close-button">
          <IconClose />
        </button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.79);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  position: relative;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-button {
  position: absolute;
  top: -25px;
  right: 0;
  cursor: pointer;
  background: none;
  border: 0;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
