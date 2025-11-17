<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import CategoryList from '@/components/CategoryList.vue'
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main>Контент</main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  gap: 200px;
  min-height: calc(100vh - 140px);
  max-width: 1450px;
  margin: 140px auto 0 auto;
}

.nav {
  min-width: 400px;
}
</style>
