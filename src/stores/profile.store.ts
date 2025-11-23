import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Profile } from '@/interfaces/profile.interface.ts'
import { API_ROUTES, client } from '@/api.ts'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>()

  const fetchProfile = async () => {
    const { data } = await client().get<Profile>(API_ROUTES.auth.profile)
    profile.value = data
  }

  return { profile, fetchProfile }
})
