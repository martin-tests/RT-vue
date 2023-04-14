<template>
  <article class="flex flex-col sm:flex-row rounded-lg bg-gray-600 m-2">
    <div class="relative">
      <img v-if="character.image" :src="character.image" :alt="'Picture of ' + character.name" class="object-cover h-auto w-full sm:h-[200px] sm:w-[200px] 3xl:h-[230px] 3xl:w-[230px] rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg">
    </div>
    <div class="p-4 flex flex-col justify-between">
      <div>
        <RouterLink v-if="character.id" :to="`/character/${character.id}`">
          <h2 class="text-white text-2xl font-bold leading-6 mb-1 inline">{{ character.name }}</h2>
        </RouterLink>
        <h2 v-else class="text-white text-2xl font-bold leading-6 mb-1 inline">{{ character.name }}</h2>
        <button v-if="character.id" class="inline ml-4 text-white" @click="toggleFavorite"> {{favorite ? '&#9733; Favorite' : '&#9734; Add to favorites'}}</button>
        <div v-if="character.status && character.species">
          <CharacterStatus :status="character.status" />
          <span class="text-white text-base font-medium">{{ character.status }} - {{ character.species }}</span>
        </div>
      </div>
      <div v-if="character.location">
        <div class="text-gray-400 font-medium">Last known location:</div>
        <a class="text-white text-lg" :href="character.location.url" target="_blank">{{ character.location.name }}</a>
      </div>
      <div v-if="character.origin">
        <div class="text-gray-400 font-medium">First seen in:</div>
        <a class="text-white text-lg" :href="character.origin.url" target="_blank">{{ character.origin.name }}</a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Character } from '@/types';
import { useFavorites } from '@/composables/useFavorites'
import CharacterStatus from '@/components/atoms/CharacterStatus.vue'

const props = defineProps<{
  character: Character
}>()

const { isFavorite, storeFavorite, removeFavorite } = useFavorites()

const favorite = ref(isFavorite(Number(props.character.id)))

const toggleFavorite = () => {
  const currentFavorite = isFavorite(Number(props.character.id))
  if (currentFavorite) {
    removeFavorite(Number(props.character.id))
  } else {
    storeFavorite(Number(props.character.id))
  }
  favorite.value = !favorite.value
}
</script>