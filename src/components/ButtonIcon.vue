<script lang="ts" setup="">
const { size = 32 } = defineProps<{ size?: number }>()
</script>

<template>
  <button
    class="button-icon"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <slot />
  </button>
</template>

<style scoped>
.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-fg);
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
}

.button-icon:hover {
  background: var(--color-fg-hover);
}
</style>
