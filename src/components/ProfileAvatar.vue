<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store.ts'
import { onMounted } from 'vue'

const store = useProfileStore()

onMounted(() => {
  store.fetchProfile()
})

</script>

<template>
  <div v-if="store.profile" class="profile-avatar">
    <img class="profile-avatar__image" src="/avatar.png" alt="Аватар" />
    <div>
      Привет, <strong>{{ store.profile.name }}!</strong>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;

  font-size: 18px;
}

.profile-avatar__image {
  width: 80px;
  height: 80px;
}
</style>



