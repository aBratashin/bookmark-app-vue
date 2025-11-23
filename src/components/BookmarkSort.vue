<script setup lang="ts">
const { option } = defineProps<{ option: string }>()

const SORT_OPTIONS = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' },
]

const emit = defineEmits<{ (e: 'sort', option: string): void }>()
</script>

<template>
  <div class="sort">
    <button
      v-for="item in SORT_OPTIONS"
      @click="emit('sort', item.option)"
      :key="item.option"
      :class="['sort-item', { active: option === item.option }]"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped>
.sort {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.sort-item {
  font-size: 16px;
  color: var(--color-inactive);

  border: none;
  background: none;
  cursor: pointer;
}

.sort-item.active {
  font-weight: 700;
  color: var(--color-fg);

  border-bottom: 2px solid var(--color-fg);
}
</style>
