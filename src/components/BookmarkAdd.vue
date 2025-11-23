<script setup lang="ts">
import ButtonIconBig from '@/components/ButtonIconBig.vue'
import IconPlusBig from '@/icons/IconPlusBig.vue'
import InputString from '@/components/InputString.vue'
import { ref } from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconOk from '@/icons/IconOk.vue'
import { useBookmarkStore } from '@/stores/bookmark.store.ts'

const { category_id } = defineProps<{ category_id: number }>()

const bookmarkStore = useBookmarkStore()

const isEdited = ref<boolean>(false)
const newUrl = ref<string>()

const toggleIsEdited = () => {
  isEdited.value = !isEdited.value
}

const addBookmark = () => {
  if (!newUrl.value) {
    return
  }

  bookmarkStore.addBookmark(category_id, newUrl.value)
  newUrl.value = ''
  toggleIsEdited()
}
</script>

<template>
  <div class="bookmark-add">
    <ButtonIconBig v-if="!isEdited" @click="toggleIsEdited">
      <IconPlusBig />
    </ButtonIconBig>
    <div v-else class="bookmark-form">
      <InputString v-model="newUrl" is-focused />
      <ButtonIcon @click="addBookmark">
        <IconOk />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.bookmark-add {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 314px;
  height: 337px;

  border: 1px dashed var(--color-fg);
  border-radius: 30px;
}

.bookmark-form {
  display: flex;
  gap: 24px;
}
</style>
