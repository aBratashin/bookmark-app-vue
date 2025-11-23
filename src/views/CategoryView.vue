<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/categories.store.ts'
import { onMounted, ref, watch } from 'vue'
import type { Category } from '@/interfaces/category.interface.ts'
import { useBookmarkStore } from '@/stores/bookmark.store.ts'
import CategoryHeader from '@/components/CategoryHeader.vue'
import BookmarkCard from '@/components/BookmarkCard.vue'
import BookmarkSort from '@/components/BookmarkSort.vue'
import BookmarkAdd from '@/components/BookmarkAdd.vue'

const route = useRoute()
const categoryStore = useCategoryStore()
const bookmarkStore = useBookmarkStore()

const category = ref<Category>()

const sortBookmarks = (sort: string) => {
  bookmarkStore.activeSort = sort
}

onMounted(() => {
  if (route.params.alias) category.value = categoryStore.getCategoryByAlias(route.params.alias)
  if (category.value) bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort)
})

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
    activeSort: bookmarkStore.activeSort,
  }),
  (data) => {
    if (data.alias) category.value = categoryStore.getCategoryByAlias(data.alias)
    if (category.value) bookmarkStore.fetchBookmarks(category.value.id, data.activeSort)
  },
)
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
  <BookmarkSort :option="bookmarkStore.activeSort" @sort="sortBookmarks" />
  <div class="bookmark-list">
    <BookmarkCard
      v-for="bookmark in bookmarkStore.bookmarks"
      :key="bookmark.id"
      v-bind="bookmark"
    />
    <BookmarkAdd v-if="category" :category_id="category.id" />
  </div>
</template>

<style scoped>
.bookmark-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 350px);
  gap: 24px;
  margin-top: 30px;
}
</style>
