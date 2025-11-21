<script setup lang="ts">
</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 12px 24px;

  color: var(--color-bg);
  font-size: 18px;

  background: var(--color-fg);
  border: none;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
}

.button:hover {
  background: var(--color-fg-hover);
}
</style>
