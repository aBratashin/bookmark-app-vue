<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store.ts'
import { onMounted } from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconPlus from '@/icons/IconPlus.vue'

const store = useCategoryStore()

onMounted(() => {
  store.fetchCategories()
})
</script>

<template>
  <ul class="category-list">
    <li class="list-item" v-for="category in store.categories" :key="category.id">
      <a href="/${item.alias}">{{ category.name }}</a>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory">
        <IconPlus />
      </ButtonIcon>
    </li>
  </ul>
</template>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

.category-list li {
  list-style: none;
}

.list-item a {
  color: var(--color-fg);
  font-size: 14px;
  text-decoration: none;

  transition: all 0.5s;
}

.list-item a:hover {
  font-size: 24px;
  font-weight: 700;
}
</style>
