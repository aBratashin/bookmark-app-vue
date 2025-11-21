import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Category } from '@/interfaces/category.interface.ts'
import { API_ROUTES, http } from '@/api.ts'
import { v4 as uuidv4 } from 'uuid'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])

  const fetchCategories = async () => {
    const { data } = await http.get<Category[]>(API_ROUTES.categories)
    categories.value = data
  }

  const createCategory = async () => {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
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

  return { categories, fetchCategories, createCategory, getCategoryByAlias }
})
