import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Category } from '@/interfaces/category.interface.ts'
import { API_ROUTES, http } from '@/api.ts'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])

  const fetchCategories = async () => {
    const { data } = await http.get<Category[]>(API_ROUTES.categories)
    categories.value = data
  }

  const createCategory = async () => {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: 'new'
    })
    categories.value.push(data)
  }

  return { categories, fetchCategories, createCategory }
})


















