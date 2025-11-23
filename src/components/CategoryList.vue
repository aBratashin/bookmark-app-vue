<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store.ts'
import { onMounted } from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconPlus from '@/icons/IconPlus.vue'
import ButtonText from '@/components/ButtonText.vue'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useCategoryStore()
const authStore = useAuthStore()

onMounted(() => {
  store.fetchCategories()
})

const logout = () => {
  authStore.clearToken()
  router.push({ name: 'auth' })
}
</script>

<template>
  <ul class="category-list">
    <li class="list-item" v-for="category in store.categories" :key="category.id">
      <RouterLink :to="`/main/${category.alias}`" active-class="active-link">{{
        category.name
      }}</RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory">
        <IconPlus />
      </ButtonIcon>
    </li>
    <li class="list-item">
      <a href="#" @click="logout">Выход</a>
    </li>
  </ul>
</template>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

.category-list li {
  list-style: none;
}

.list-item a {
  color: var(--color-fg);
  font-size: 14px;
  text-decoration: none;

  transition: all 0.5s;
}

.list-item a.active-link,
.list-item a:hover {
  font-size: 24px;
  font-weight: 700;
}
</style>
