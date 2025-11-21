<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import CategoryList from '@/components/CategoryList.vue'
</script>

<template>
  <div class="main">
    <nav class="nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 200px;
  min-height: calc(100vh - 140px);
  max-width: 1450px;
  margin: 140px auto 0 auto;
}

.nav {
  min-width: 320px;
}
</style>
