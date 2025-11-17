import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Profile } from '@/interfaces/profile.interface.ts'
import { API_ROUTES, http } from '@/api.ts'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>()

  const fetchProfile = async () => {
    const { data } = await http.get<Profile>(API_ROUTES.profile)
    profile.value = data
  }

  return { profile, fetchProfile }
})
