import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Category } from '@/interfaces/category.interface.ts'
import { API_ROUTES, client } from '@/api.ts'
import { v4 as uuidv4 } from 'uuid'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])

  const fetchCategories = async () => {
    const { data } = await client().get<Category[]>(API_ROUTES.categories)
    categories.value = data
  }

  const createCategory = async () => {
    const { data } = await client().post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })
    categories.value.push(data)
  }

  const getCategoryByAlias = (alias: string | string[]): Category | undefined => {
    if (typeof alias === 'string') {
      return categories.value.find((category) => category.alias === alias)
    }

    return
  }

  const updateCategory = async (id: number, name: string, alias: string) => {
    await client().put<Category>(API_ROUTES.categories + '/' + id, {
      name,
      alias,
    })

    await fetchCategories()
  }

  const deleteCategory = async (id: number) => {
    await client().delete<Category>(API_ROUTES.categories + '/' + id)
    await fetchCategories()
  }

  return {
    categories,
    fetchCategories,
    createCategory,
    getCategoryByAlias,
    updateCategory,
    deleteCategory,
  }
})
