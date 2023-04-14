<template>
  <div class="inline-block h-2 w-2 mr-2 rounded-full align-middle" :class="colorClass"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CharacterStatus } from '@/types';

const props = defineProps<{
  status: CharacterStatus
}>()

const statusColorClasses: Record<string, string> = {
  'Alive': 'bg-green-500',
  'unknown': 'bg-gray-200',
  'Dead': 'bg-red-500'
}

const colorClass = computed(() => statusColorClasses[props.status])
</script>