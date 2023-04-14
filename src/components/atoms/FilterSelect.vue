<template>
  <div class="flex items-baseline text-white bg-gray-600 rounded-lg p-4 m-4">
    <div>{{ label }}:</div>
    <select @change="$emit('update:value', ($event.target! as HTMLSelectElement).value)" class="ml-2 w-full">
      <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string,
  options: string[]
}>()
</script>