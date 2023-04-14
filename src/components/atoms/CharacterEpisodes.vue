<template>
  <section class="rounded-lg bg-gray-600 m-4 p-4">
    <h2 class="text-white text-2xl font-bold leading-6 mb-1">Episodes:</h2>
    <div class="flex flex-wrap">
      <a v-for="episode in character.episode" :href="episode" target="_blank" class="m-2">{{ episode }}</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Character } from '@/types';

const props = defineProps<{
  character: Character
}>()
</script>