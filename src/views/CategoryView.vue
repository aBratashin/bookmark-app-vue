<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/categories.store.ts'
import { onMounted, ref, watch } from 'vue'
import type { Category } from '@/interfaces/category.interface.ts'
import { useBookmarkStore } from '@/stores/bookmark.store.ts'

const route = useRoute()
const categoryStore = useCategoryStore()
const bookmarkStore = useBookmarkStore()

const category = ref<Category>()

onMounted(() => {
  if (route.params.alias) category.value = categoryStore.getCategoryByAlias(route.params.alias)
  if (category.value) bookmarkStore.fetchBookmarks(category.value.id)
})

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    if (data.alias) category.value = categoryStore.getCategoryByAlias(data.alias)
    if (category.value) bookmarkStore.fetchBookmarks(category.value.id)
  },
)
</script>

<template>
  <div>Category</div>
  {{ bookmarkStore.bookmarks }}
</template>

<style scoped></style>
