import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'
import type { LoginResponse } from '@/interfaces/auth.interface.ts'

const TOKEN_STORE_KEY = 'token-store'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY)

  if (initialValue) {
    token.value = initialValue
  }

  const clearToken = () => {
    token.value = undefined
    localStorage.removeItem(TOKEN_STORE_KEY)
  }

  const setToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken)
  }

  const getToken = computed(() => token.value)

  const login = async (email: string, password: string) => {
    const { data } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
      email,
      password,
    })

    setToken(data.token)
  }

  return { getToken, setToken, clearToken, login }
})
