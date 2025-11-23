<script setup lang="ts">
import type { Bookmark } from '@/interfaces/bookmark.interface.ts'
import ButtonIconBig from '@/components/ButtonIconBig.vue'
import IconLink from '@/icons/IconLink.vue'
import IconTrashWhite from '@/icons/IconTrashWhite.vue'
import { useBookmarkStore } from '@/stores/bookmark.store.ts'
import { ref } from 'vue'
import PopupConfirm from '@/components/PopupConfirm.vue'

const { id, category_id, title, image, url } = defineProps<Bookmark>()

const bookmarkStore = useBookmarkStore()

const isOpened = ref<boolean>(false)

const openLink = () => {
  window.open(url, '_blank')
}

const deleteBookmark = () => {
  isOpened.value = !isOpened.value
  bookmarkStore.deleteBookmark(id, category_id)
}
</script>

<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }" />
    <div class="bookmark-card__title">{{ title }}</div>
    <div class="bookmark-card__footer">
      <ButtonIconBig @click="isOpened = !isOpened">
        <IconTrashWhite />
      </ButtonIconBig>
      <ButtonIconBig @click="openLink">
        <IconLink />
      </ButtonIconBig>
    </div>
    <PopupConfirm
      :is-opened="isOpened"
      text="Хотите удалить закладку?"
      @ok="deleteBookmark"
      @cancel="isOpened = !isOpened"
    />
  </div>
</template>

<style scoped>
.bookmark-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;

  background: var(--color-fg);
  border-radius: 30px;
  box-shadow: 0 10px 10px 0 rgba(245, 245, 247, 0.1);
}

.bookmark-card__title {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-bg);
}

.bookmark-card__image {
  min-width: 270px;
  min-height: 160px;

  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.bookmark-card__footer {
  display: flex;
  justify-content: space-between;
}
</style>
