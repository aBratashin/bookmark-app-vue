import { ref } from 'vue'
import type { Bookmark } from '@/interfaces/bookmark.interface.ts'
import { API_ROUTES, http } from '@/api.ts'
import { defineStore } from 'pinia'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([])

  const fetchBookmarks = async (categoryId: number) => {
    const { data } = await http.get<Bookmark[]>(API_ROUTES.bookmarks(categoryId), {
      params: { sort: 'title' },
    })

    bookmarks.value = data
  }

  return { bookmarks, fetchBookmarks }
})
