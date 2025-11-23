<script setup lang="ts"></script>

<template>
  <button class="button-icon-big">
    <slot />
  </button>
</template>

<style scoped>
.button-icon-big {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;

  background: var(--color-fg);
  border: 3px solid var(--color-bg);
  outline: none;
  border-radius: 50%;
  cursor: pointer;
}

.button-icon-big:hover {
  background: var(--color-bg-hover);
}
</style>
