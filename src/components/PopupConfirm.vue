<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue'

const { isOpened, text } = defineProps<{ isOpened: boolean; text: string }>()

const emit = defineEmits<{
  (e: 'ok'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <Transition name="fade">
    <Teleport to="body">
      <div class="popup__cover" v-if="isOpened">
        <div class="popup">
          {{ text }}
          <div class="popup__actions">
            <ButtonText @click="emit('ok')">Да</ButtonText>
            <ButtonText @click="emit('cancel')">Нет</ButtonText>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style scoped>
.popup__cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-inactive);
}

.popup {
  padding: 20px;
  min-width: 350px;

  background-color: var(--color-bg);
  border-radius: 20px;
}

.popup__actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
</style>
