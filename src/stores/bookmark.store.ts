import { ref } from 'vue'
import type { Bookmark } from '@/interfaces/bookmark.interface.ts'
import { API_ROUTES, client } from '@/api.ts'
import { defineStore } from 'pinia'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([])
  const activeSort = ref<string>('date')

  const fetchBookmarks = async (categoryId: number, sort: string) => {
    const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: { sort },
    })

    bookmarks.value = data
  }

  const deleteBookmark = async (bookmarkId: number, categoryId: number) => {
    await client().delete<Bookmark[]>(API_ROUTES.bookmarks.delete(bookmarkId))
    await fetchBookmarks(categoryId, activeSort.value)
  }

  const addBookmark = async (category_id: number, url: string) => {
    await client().post<Bookmark>(API_ROUTES.bookmarks.create, {
      category_id,
      url,
    })
    await fetchBookmarks(category_id, activeSort.value)
  }

  return { bookmarks, activeSort, fetchBookmarks, deleteBookmark, addBookmark }
})
