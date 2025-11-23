<script setup lang="ts">
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconEdit from '@/icons/IconEdit.vue'
import type { Category } from '@/interfaces/category.interface.ts'
import IconOk from '@/icons/IconOk.vue'
import InputString from '@/components/InputString.vue'
import { ref } from 'vue'
import { useCategoryStore } from '@/stores/categories.store.ts'
import IconTrash from '@/icons/IconTrash.vue'
import { useRouter } from 'vue-router'

const { category } = defineProps<{
  category: Category
}>()

const router = useRouter()
const isEdited = ref<boolean>(false)
const newCategoryName = ref<string>(category.name)
const categoryStore = useCategoryStore()

const toggleEdit = () => {
  isEdited.value = !isEdited.value
}

const updateCategory = () => {
  if (!newCategoryName.value) {
    return
  }

  categoryStore.updateCategory(category.id, newCategoryName.value, category.alias)
  toggleEdit()
}

const deleteCategory = () => {
  categoryStore.deleteCategory(category.id)

  router.push({
    name: 'main',
  })
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited">{{ category.name }}</h1>
    <div v-else class="category-header__edit">
      <InputString v-focus @keyup.enter="updateCategory" v-model="newCategoryName" />
      <ButtonIcon @click="updateCategory">
        <IconOk />
      </ButtonIcon>
    </div>
    <div class="category-header__actions">
      <ButtonIcon @click="deleteCategory">
        <IconTrash />
      </ButtonIcon>
      <ButtonIcon v-if="!isEdited" @click="toggleEdit">
        <IconEdit />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
}

.category-header__edit,
.category-header__actions {
  display: flex;
  gap: 10px;
}
</style>
