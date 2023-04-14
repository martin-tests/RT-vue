<template>
  <div class="flex items-baseline text-white bg-gray-600 rounded-lg p-4 mt-4 mx-4">
    <div>{{ label }}:</div>
    <input v-model="inputText" type="text" class="ml-2 w-full px-2" />
    <!-- <button @click="$emit('update:value', inputText)" class="bg-green-200 px-2 ml-2">Go</button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  label: string
}>()

const emit = defineEmits<{
  (event: 'update', text: string): void
}>()

const inputText = ref('')

watch(inputText, (value, _) => {
  emit('update', value)
})
</script>